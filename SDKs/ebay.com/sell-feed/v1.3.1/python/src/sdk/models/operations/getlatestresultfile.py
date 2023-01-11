import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetLatestResultFilePathParams:
    schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLatestResultFileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetLatestResultFileRequest:
    path_params: GetLatestResultFilePathParams = dataclasses.field()
    security: GetLatestResultFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLatestResultFileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
