import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionsummary as shared_jobexecutionsummary


@dataclass_json
@dataclasses.dataclass
class JobExecutionSummaryForJob:
    r"""JobExecutionSummaryForJob
    Contains a summary of information about job executions for a specific job.
    """
    
    job_execution_summary: Optional[shared_jobexecutionsummary.JobExecutionSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionSummary') }})
    thing_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingArn') }})
    
