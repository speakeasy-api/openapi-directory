import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failure as shared_failure
from ..shared import taskset as shared_taskset


@dataclass_json
@dataclasses.dataclass
class DescribeTaskSetsResponse:
    failures: Optional[list[shared_failure.Failure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    task_sets: Optional[list[shared_taskset.TaskSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSets') }})
    
