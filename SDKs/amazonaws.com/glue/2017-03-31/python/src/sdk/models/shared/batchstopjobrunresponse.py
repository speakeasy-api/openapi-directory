import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchstopjobrunerror as shared_batchstopjobrunerror
from ..shared import batchstopjobrunsuccessfulsubmission as shared_batchstopjobrunsuccessfulsubmission


@dataclass_json
@dataclasses.dataclass
class BatchStopJobRunResponse:
    errors: Optional[list[shared_batchstopjobrunerror.BatchStopJobRunError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    successful_submissions: Optional[list[shared_batchstopjobrunsuccessfulsubmission.BatchStopJobRunSuccessfulSubmission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulSubmissions') }})
    
