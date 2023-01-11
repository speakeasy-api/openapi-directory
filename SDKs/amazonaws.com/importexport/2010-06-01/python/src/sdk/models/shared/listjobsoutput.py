import dataclasses
from typing import Optional
from ..shared import job as shared_job


@dataclasses.dataclass
class ListJobsOutput:
    r"""ListJobsOutput
    Output structure for the ListJobs operation.
    """
    
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    jobs: Optional[list[shared_job.Job]] = dataclasses.field(default=None)
    
