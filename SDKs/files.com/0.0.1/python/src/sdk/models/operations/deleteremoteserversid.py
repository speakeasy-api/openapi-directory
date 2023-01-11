import dataclasses



@dataclasses.dataclass
class DeleteRemoteServersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRemoteServersIDRequest:
    path_params: DeleteRemoteServersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRemoteServersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
