import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failedremediationbatch as shared_failedremediationbatch


@dataclass_json
@dataclasses.dataclass
class PutRemediationConfigurationsResponse:
    failed_batches: Optional[list[shared_failedremediationbatch.FailedRemediationBatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedBatches') }})
    
