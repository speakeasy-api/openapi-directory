import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchwriteoperationresponse as shared_batchwriteoperationresponse


@dataclass_json
@dataclasses.dataclass
class BatchWriteResponse:
    responses: Optional[list[shared_batchwriteoperationresponse.BatchWriteOperationResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    
