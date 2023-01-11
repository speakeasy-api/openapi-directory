import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobrun as shared_jobrun


@dataclass_json
@dataclasses.dataclass
class JobNodeDetails:
    r"""JobNodeDetails
    The details of a Job node present in the workflow.
    """
    
    job_runs: Optional[list[shared_jobrun.JobRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRuns') }})
    
