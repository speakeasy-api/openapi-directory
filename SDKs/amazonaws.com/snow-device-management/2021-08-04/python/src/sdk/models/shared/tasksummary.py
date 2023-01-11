import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskstate_enum as shared_taskstate_enum


@dataclass_json
@dataclasses.dataclass
class TaskSummary:
    r"""TaskSummary
    Information about the task assigned to one or many devices.
    """
    
    task_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    state: Optional[shared_taskstate_enum.TaskStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    
