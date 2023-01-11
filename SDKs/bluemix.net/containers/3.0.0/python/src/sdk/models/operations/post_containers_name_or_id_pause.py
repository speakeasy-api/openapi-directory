import dataclasses



@dataclasses.dataclass
class PostContainersNameOrIDPausePathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDPauseHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDPauseRequest:
    headers: PostContainersNameOrIDPauseHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDPausePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDPauseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
