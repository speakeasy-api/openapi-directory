import dataclasses



@dataclasses.dataclass
class RejectDirectDebitPathParams:
    direct_debit_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directDebitUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RejectDirectDebitRequest:
    path_params: RejectDirectDebitPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RejectDirectDebitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
