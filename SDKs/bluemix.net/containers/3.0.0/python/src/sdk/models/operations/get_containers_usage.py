import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersUsageHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersUsageRequest:
    headers: GetContainersUsageHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_usage_info: Optional[Any] = dataclasses.field(default=None)
    
