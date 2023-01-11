import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskobject as shared_taskobject


@dataclass_json
@dataclasses.dataclass
class PollForTaskOutput:
    r"""PollForTaskOutput
    Contains the output of PollForTask.
    """
    
    task_object: Optional[shared_taskobject.TaskObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskObject') }})
    
