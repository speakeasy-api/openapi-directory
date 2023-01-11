import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobsummary as shared_jobsummary


@dataclass_json
@dataclasses.dataclass
class ListJobsResult:
    r"""ListJobsResult
     The maximum number of records to list in a single response. 
    """
    
    job_summaries: list[shared_jobsummary.JobSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
