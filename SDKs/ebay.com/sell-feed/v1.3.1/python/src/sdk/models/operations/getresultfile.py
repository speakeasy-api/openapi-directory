import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetResultFilePathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResultFileSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetResultFileRequest:
    path_params: GetResultFilePathParams = dataclasses.field()
    security: GetResultFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetResultFileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
