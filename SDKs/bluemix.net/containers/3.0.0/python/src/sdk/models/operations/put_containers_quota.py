import dataclasses
from typing import Any


@dataclasses.dataclass
class PutContainersQuotaHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutContainersQuotaRequest:
    headers: PutContainersQuotaHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutContainersQuotaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
