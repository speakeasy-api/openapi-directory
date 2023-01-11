import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import step as shared_step
from ..shared import jobsummary as shared_jobsummary


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
     Describes an execution job for an Amplify app. 
    """
    
    steps: list[shared_step.Step] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    summary: shared_jobsummary.JobSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
