import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedremediationexceptionbatch as shared_failedremediationexceptionbatch


@dataclass_json
@dataclasses.dataclass
class PutRemediationExceptionsResponse:
    failed_batches: Optional[list[shared_failedremediationexceptionbatch.FailedRemediationExceptionBatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedBatches') }})
    
