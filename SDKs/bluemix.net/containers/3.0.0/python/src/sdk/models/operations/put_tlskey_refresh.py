import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PutTlskeyRefreshHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutTlskeyRefreshRequest:
    headers: PutTlskeyRefreshHeaders = dataclasses.field()
    

@dataclasses.dataclass
class PutTlskeyRefreshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate_refresh: Optional[Any] = dataclasses.field(default=None)
    
