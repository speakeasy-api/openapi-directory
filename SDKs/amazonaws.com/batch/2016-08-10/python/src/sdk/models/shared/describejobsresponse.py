import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobdetail as shared_jobdetail


@dataclass_json
@dataclasses.dataclass
class DescribeJobsResponse:
    jobs: Optional[list[shared_jobdetail.JobDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    
