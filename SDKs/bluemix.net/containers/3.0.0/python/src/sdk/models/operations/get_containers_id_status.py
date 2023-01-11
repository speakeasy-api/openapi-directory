import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersIDStatusPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersIDStatusHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersIDStatusRequest:
    headers: GetContainersIDStatusHeaders = dataclasses.field()
    path_params: GetContainersIDStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersIDStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_container_status: Optional[Any] = dataclasses.field(default=None)
    
