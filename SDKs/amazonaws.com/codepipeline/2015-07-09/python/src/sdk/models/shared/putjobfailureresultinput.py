import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failuredetails as shared_failuredetails


@dataclass_json
@dataclasses.dataclass
class PutJobFailureResultInput:
    r"""PutJobFailureResultInput
    Represents the input of a <code>PutJobFailureResult</code> action.
    """
    
    failure_details: shared_failuredetails.FailureDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetails') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
