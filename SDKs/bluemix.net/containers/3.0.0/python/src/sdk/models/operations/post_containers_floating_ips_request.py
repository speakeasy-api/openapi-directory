import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostContainersFloatingIpsRequestHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersFloatingIpsRequestRequest:
    headers: PostContainersFloatingIpsRequestHeaders = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersFloatingIpsRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_containers_floating_ips_request_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
