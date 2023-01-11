import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersFloatingIpsQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContainersFloatingIpsHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersFloatingIpsRequest:
    headers: GetContainersFloatingIpsHeaders = dataclasses.field()
    query_params: GetContainersFloatingIpsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersFloatingIpsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    floating_ips: Optional[list[Any]] = dataclasses.field(default=None)
    
