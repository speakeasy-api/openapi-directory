import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import childpolicy_enum as shared_childpolicy_enum
from ..shared import tasklist as shared_tasklist
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class StartChildWorkflowExecutionInitiatedEventAttributes:
    r"""StartChildWorkflowExecutionInitiatedEventAttributes
    Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
    """
    
    child_policy: shared_childpolicy_enum.ChildPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    task_list: shared_tasklist.TaskList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    control: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    execution_start_to_close_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartToCloseTimeout') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    lambda_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaRole') }})
    tag_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    task_priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    task_start_to_close_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartToCloseTimeout') }})
    
