import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateBatchPaymentNewBatchTypeEnum(str, Enum):
    BANK_TRANSFER = "BANK_TRANSFER"
    INTERNAL_TRANSFER = "INTERNAL_TRANSFER"


@dataclass_json
@dataclasses.dataclass
class CreateBatchPaymentNewBatch:
    batch_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchName') }})
    call_back_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callBackUrl') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    job_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobNumber') }})
    type: Optional[CreateBatchPaymentNewBatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBatchPaymentNewBatchResponse:
    batch_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchUuid') }})
    

@dataclasses.dataclass
class CreateBatchPaymentRequest:
    request: CreateBatchPaymentNewBatch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    new_batch_response: Optional[CreateBatchPaymentNewBatchResponse] = dataclasses.field(default=None)
    
