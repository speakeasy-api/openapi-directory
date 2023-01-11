import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineobject as shared_pipelineobject


@dataclass_json
@dataclasses.dataclass
class TaskObject:
    r"""TaskObject
    Contains information about a pipeline task that is assigned to a task runner.
    """
    
    attempt_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptId') }})
    objects: Optional[dict[str, shared_pipelineobject.PipelineObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objects') }})
    pipeline_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    
