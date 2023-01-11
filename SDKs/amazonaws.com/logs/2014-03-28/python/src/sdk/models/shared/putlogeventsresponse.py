import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rejectedlogeventsinfo as shared_rejectedlogeventsinfo


@dataclass_json
@dataclasses.dataclass
class PutLogEventsResponse:
    next_sequence_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSequenceToken') }})
    rejected_log_events_info: Optional[shared_rejectedlogeventsinfo.RejectedLogEventsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectedLogEventsInfo') }})
    
