import dataclasses



@dataclasses.dataclass
class PostContainersNameOrIDStartPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDStartHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDStartRequest:
    headers: PostContainersNameOrIDStartHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDStartPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
