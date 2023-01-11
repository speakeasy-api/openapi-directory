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
class StartWorkflowExecutionInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    child_policy: Optional[shared_childpolicy_enum.ChildPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    execution_start_to_close_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartToCloseTimeout') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    lambda_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaRole') }})
    tag_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    task_list: Optional[shared_tasklist.TaskList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    task_priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    task_start_to_close_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartToCloseTimeout') }})
    
