import dataclasses



@dataclasses.dataclass
class DeleteProjectsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectsIDRequest:
    path_params: DeleteProjectsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
