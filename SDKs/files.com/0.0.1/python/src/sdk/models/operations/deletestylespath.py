import dataclasses



@dataclasses.dataclass
class DeleteStylesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteStylesPathRequest:
    path_params: DeleteStylesPathPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteStylesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
