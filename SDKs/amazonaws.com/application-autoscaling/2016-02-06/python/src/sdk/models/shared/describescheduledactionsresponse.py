import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledaction as shared_scheduledaction


@dataclass_json
@dataclasses.dataclass
class DescribeScheduledActionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scheduled_actions: Optional[list[shared_scheduledaction.ScheduledAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledActions') }})
    
