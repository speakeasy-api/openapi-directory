import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putpartnereventsrequestentry as shared_putpartnereventsrequestentry


@dataclass_json
@dataclasses.dataclass
class PutPartnerEventsRequest:
    entries: list[shared_putpartnereventsrequestentry.PutPartnerEventsRequestEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    
