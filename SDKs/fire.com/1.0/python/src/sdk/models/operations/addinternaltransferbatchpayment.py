import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddInternalTransferBatchPaymentPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddInternalTransferBatchPaymentBatchItemInternalTransfer:
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ican_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanFrom') }})
    ican_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    

@dataclass_json
@dataclasses.dataclass
class AddInternalTransferBatchPaymentNewBatchItemResponse:
    batch_item_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchItemUuid') }})
    

@dataclasses.dataclass
class AddInternalTransferBatchPaymentRequest:
    path_params: AddInternalTransferBatchPaymentPathParams = dataclasses.field()
    request: AddInternalTransferBatchPaymentBatchItemInternalTransfer = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddInternalTransferBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    new_batch_item_response: Optional[AddInternalTransferBatchPaymentNewBatchItemResponse] = dataclasses.field(default=None)
    
