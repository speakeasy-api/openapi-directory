import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import puteventsresultentry as shared_puteventsresultentry


@dataclass_json
@dataclasses.dataclass
class PutEventsResponse:
    entries: Optional[list[shared_puteventsresultentry.PutEventsResultEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    failed_entry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEntryCount') }})
    
