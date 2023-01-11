import dataclasses



@dataclasses.dataclass
class PostContainersNameOrIDUnpausePathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDUnpauseHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDUnpauseRequest:
    headers: PostContainersNameOrIDUnpauseHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDUnpausePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDUnpauseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
