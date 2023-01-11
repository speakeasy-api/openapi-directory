import dataclasses



@dataclasses.dataclass
class DeleteNodePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
