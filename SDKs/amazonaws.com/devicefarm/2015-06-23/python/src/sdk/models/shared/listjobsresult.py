import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class ListJobsResult:
    r"""ListJobsResult
    Represents the result of a list jobs request.
    """
    
    jobs: Optional[list[shared_job.Job]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
