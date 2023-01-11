import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import generatedpolicyresult as shared_generatedpolicyresult
from ..shared import jobdetails as shared_jobdetails


@dataclass_json
@dataclasses.dataclass
class GetGeneratedPolicyResponse:
    generated_policy_result: shared_generatedpolicyresult.GeneratedPolicyResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('generatedPolicyResult') }})
    job_details: shared_jobdetails.JobDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    
