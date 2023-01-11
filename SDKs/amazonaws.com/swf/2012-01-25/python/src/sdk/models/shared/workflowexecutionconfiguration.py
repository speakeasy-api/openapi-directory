import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import childpolicy_enum as shared_childpolicy_enum
from ..shared import tasklist as shared_tasklist


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionConfiguration:
    r"""WorkflowExecutionConfiguration
    The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
    """
    
    child_policy: shared_childpolicy_enum.ChildPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('childPolicy') }})
    execution_start_to_close_timeout: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStartToCloseTimeout') }})
    task_list: shared_tasklist.TaskList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskList') }})
    task_start_to_close_timeout: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartToCloseTimeout') }})
    lambda_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaRole') }})
    task_priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPriority') }})
    
