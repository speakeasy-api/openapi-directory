import dataclasses



@dataclasses.dataclass
class DeleteBankTransferBatchPaymentPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBankTransferBatchPaymentRequest:
    path_params: DeleteBankTransferBatchPaymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBankTransferBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
