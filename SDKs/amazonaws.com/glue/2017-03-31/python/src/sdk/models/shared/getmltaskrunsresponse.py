import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskrun as shared_taskrun


@dataclass_json
@dataclasses.dataclass
class GetMlTaskRunsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    task_runs: Optional[list[shared_taskrun.TaskRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRuns') }})
    
