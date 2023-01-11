import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputlogevent as shared_outputlogevent


@dataclass_json
@dataclasses.dataclass
class GetLogEventsResponse:
    events: Optional[list[shared_outputlogevent.OutputLogEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_backward_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextBackwardToken') }})
    next_forward_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextForwardToken') }})
    
