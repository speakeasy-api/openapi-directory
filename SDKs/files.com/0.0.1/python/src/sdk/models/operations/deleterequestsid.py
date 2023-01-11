import dataclasses



@dataclasses.dataclass
class DeleteRequestsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRequestsIDRequest:
    path_params: DeleteRequestsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRequestsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
