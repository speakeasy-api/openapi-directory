import dataclasses



@dataclasses.dataclass
class DeleteUserRequestsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserRequestsIDRequest:
    path_params: DeleteUserRequestsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserRequestsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
