import dataclasses



@dataclasses.dataclass
class GetNodePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
