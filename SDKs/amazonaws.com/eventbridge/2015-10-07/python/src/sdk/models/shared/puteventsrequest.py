import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import puteventsrequestentry as shared_puteventsrequestentry


@dataclass_json
@dataclasses.dataclass
class PutEventsRequest:
    entries: list[shared_puteventsrequestentry.PutEventsRequestEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    
