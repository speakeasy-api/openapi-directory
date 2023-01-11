import dataclasses



@dataclasses.dataclass
class GetTransactionCostPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionCostRequest:
    path_params: GetTransactionCostPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionCostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
