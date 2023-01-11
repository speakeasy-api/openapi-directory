import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionsummary as shared_jobexecutionsummary


@dataclass_json
@dataclasses.dataclass
class JobExecutionSummaryForThing:
    r"""JobExecutionSummaryForThing
    The job execution summary for a thing.
    """
    
    job_execution_summary: Optional[shared_jobexecutionsummary.JobExecutionSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionSummary') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
