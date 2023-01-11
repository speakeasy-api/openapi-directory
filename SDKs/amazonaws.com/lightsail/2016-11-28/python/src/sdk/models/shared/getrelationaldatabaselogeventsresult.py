import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logevent as shared_logevent


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseLogEventsResult:
    next_backward_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextBackwardToken') }})
    next_forward_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextForwardToken') }})
    resource_log_events: Optional[list[shared_logevent.LogEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLogEvents') }})
    
