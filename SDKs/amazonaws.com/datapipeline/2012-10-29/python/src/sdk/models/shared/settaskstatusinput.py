import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskstatus_enum as shared_taskstatus_enum


@dataclass_json
@dataclasses.dataclass
class SetTaskStatusInput:
    r"""SetTaskStatusInput
    Contains the parameters for SetTaskStatus.
    """
    
    task_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: shared_taskstatus_enum.TaskStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    error_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorId') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_stack_trace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorStackTrace') }})
    
