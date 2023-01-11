import dataclasses



@dataclasses.dataclass
class GetSessioncreatePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSessioncreateRequest:
    path_params: GetSessioncreatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSessioncreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
