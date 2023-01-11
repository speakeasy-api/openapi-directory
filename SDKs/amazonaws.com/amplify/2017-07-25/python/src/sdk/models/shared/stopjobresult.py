import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobsummary as shared_jobsummary


@dataclass_json
@dataclasses.dataclass
class StopJobResult:
    r"""StopJobResult
     The result structure for the stop job request. 
    """
    
    job_summary: shared_jobsummary.JobSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummary') }})
    
