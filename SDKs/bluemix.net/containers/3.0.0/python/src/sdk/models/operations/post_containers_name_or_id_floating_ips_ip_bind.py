import dataclasses



@dataclasses.dataclass
class PostContainersNameOrIDFloatingIpsIPBindPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDFloatingIpsIPBindHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDFloatingIpsIPBindRequest:
    headers: PostContainersNameOrIDFloatingIpsIPBindHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDFloatingIpsIPBindPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDFloatingIpsIPBindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
