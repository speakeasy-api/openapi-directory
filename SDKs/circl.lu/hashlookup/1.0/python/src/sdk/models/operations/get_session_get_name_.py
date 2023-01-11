import dataclasses



@dataclasses.dataclass
class GetSessionGetNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSessionGetNameRequest:
    path_params: GetSessionGetNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSessionGetNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
