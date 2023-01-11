import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startchildworkflowexecutionfailedcause_enum as shared_startchildworkflowexecutionfailedcause_enum
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class StartChildWorkflowExecutionFailedEventAttributes:
    r"""StartChildWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_startchildworkflowexecutionfailedcause_enum.StartChildWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    initiated_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    control: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    
