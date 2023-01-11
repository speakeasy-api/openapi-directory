import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobqueuedetail as shared_jobqueuedetail


@dataclass_json
@dataclasses.dataclass
class DescribeJobQueuesResponse:
    job_queues: Optional[list[shared_jobqueuedetail.JobQueueDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueues') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
