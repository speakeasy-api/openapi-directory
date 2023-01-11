import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class ListEventsResponse:
    events: list[shared_event.Event] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
