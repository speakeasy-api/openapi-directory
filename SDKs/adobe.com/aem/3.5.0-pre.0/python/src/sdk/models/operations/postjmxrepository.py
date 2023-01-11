import dataclasses



@dataclasses.dataclass
class PostJmxRepositoryPathParams:
    action: str = dataclasses.field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostJmxRepositoryRequest:
    path_params: PostJmxRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostJmxRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
