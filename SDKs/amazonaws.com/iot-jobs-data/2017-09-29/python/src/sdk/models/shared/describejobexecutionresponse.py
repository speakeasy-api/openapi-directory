import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecution as shared_jobexecution


@dataclass_json
@dataclasses.dataclass
class DescribeJobExecutionResponse:
    execution: Optional[shared_jobexecution.JobExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    
