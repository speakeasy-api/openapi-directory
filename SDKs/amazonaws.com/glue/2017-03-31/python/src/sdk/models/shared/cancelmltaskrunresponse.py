import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskstatustype_enum as shared_taskstatustype_enum


@dataclass_json
@dataclasses.dataclass
class CancelMlTaskRunResponse:
    status: Optional[shared_taskstatustype_enum.TaskStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    task_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRunId') }})
    transform_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    
