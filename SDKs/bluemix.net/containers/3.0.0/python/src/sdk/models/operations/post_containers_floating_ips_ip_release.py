import dataclasses



@dataclasses.dataclass
class PostContainersFloatingIpsIPReleasePathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ip', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersFloatingIpsIPReleaseHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersFloatingIpsIPReleaseRequest:
    headers: PostContainersFloatingIpsIPReleaseHeaders = dataclasses.field()
    path_params: PostContainersFloatingIpsIPReleasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersFloatingIpsIPReleaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
