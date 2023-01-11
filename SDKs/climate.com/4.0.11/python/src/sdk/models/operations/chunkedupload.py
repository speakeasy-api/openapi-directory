import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class ChunkedUploadPathParams:
    upload_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChunkedUploadHeaders:
    content_range: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChunkedUploadSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ChunkedUploadRequest:
    headers: ChunkedUploadHeaders = dataclasses.field()
    path_params: ChunkedUploadPathParams = dataclasses.field()
    security: ChunkedUploadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ChunkedUploadResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
