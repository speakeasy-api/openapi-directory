import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionsummary as shared_jobexecutionsummary


@dataclass_json
@dataclasses.dataclass
class GetPendingJobExecutionsResponse:
    in_progress_jobs: Optional[list[shared_jobexecutionsummary.JobExecutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressJobs') }})
    queued_jobs: Optional[list[shared_jobexecutionsummary.JobExecutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedJobs') }})
    
