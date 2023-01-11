import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileddeleteremediationexceptionsbatch as shared_faileddeleteremediationexceptionsbatch


@dataclass_json
@dataclasses.dataclass
class DeleteRemediationExceptionsResponse:
    failed_batches: Optional[list[shared_faileddeleteremediationexceptionsbatch.FailedDeleteRemediationExceptionsBatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedBatches') }})
    
