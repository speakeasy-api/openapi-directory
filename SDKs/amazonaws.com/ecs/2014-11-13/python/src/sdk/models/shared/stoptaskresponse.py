import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import task as shared_task


@dataclass_json
@dataclasses.dataclass
class StopTaskResponse:
    task: Optional[shared_task.Task] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
