import dataclasses



@dataclasses.dataclass
class CancelBatchPaymentPathParams:
    batch_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelBatchPaymentRequest:
    path_params: CancelBatchPaymentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CancelBatchPaymentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
