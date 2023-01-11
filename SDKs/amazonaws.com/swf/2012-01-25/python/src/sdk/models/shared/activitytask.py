import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytype as shared_activitytype
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class ActivityTask:
    r"""ActivityTask
    Unit of work sent to an activity worker.
    """
    
    activity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    activity_type: shared_activitytype.ActivityType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    task_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    workflow_execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    
