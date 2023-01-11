import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasklist as shared_tasklist


@dataclass_json
@dataclasses.dataclass
class DecisionTaskScheduledEventAttributes:
    r"""DecisionTaskScheduledEventAttributes
    Provides details about the <code>DecisionTaskScheduled</code> event.
    """
    
    task_list: shared_tasklist.TaskList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    start_to_close_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startToCloseTimeout') }})
    task_priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    
