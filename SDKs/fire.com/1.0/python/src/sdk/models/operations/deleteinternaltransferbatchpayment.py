import dataclasses



@dataclasses.dataclass
class DeleteInternalTransferBatchPaymentPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    item_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteInternalTransferBatchPaymentRequest:
    path_params: DeleteInternalTransferBatchPaymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteInternalTransferBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
