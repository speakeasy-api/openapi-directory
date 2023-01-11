import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currentrevision as shared_currentrevision
from ..shared import executiondetails as shared_executiondetails


@dataclass_json
@dataclasses.dataclass
class PutJobSuccessResultInput:
    r"""PutJobSuccessResultInput
    Represents the input of a <code>PutJobSuccessResult</code> action.
    """
    
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    continuation_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    current_revision: Optional[shared_currentrevision.CurrentRevision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRevision') }})
    execution_details: Optional[shared_executiondetails.ExecutionDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionDetails') }})
    output_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVariables') }})
    
