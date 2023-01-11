import dataclasses
from typing import Optional
from ..shared import certificate as shared_certificate


@dataclasses.dataclass
class GetTlskeyHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTlskeyRequest:
    headers: GetTlskeyHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetTlskeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    certificate: Optional[shared_certificate.Certificate] = dataclasses.field(default=None)
    
