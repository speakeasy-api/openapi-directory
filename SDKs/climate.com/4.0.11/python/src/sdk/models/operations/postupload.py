import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import upload as shared_upload
from ..shared import error as shared_error


@dataclasses.dataclass
class PostUploadHeaders:
    x_recipient_email: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Recipient-Email', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUploadSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostUploadRequest:
    headers: PostUploadHeaders = dataclasses.field()
    security: PostUploadSecurity = dataclasses.field()
    request: Optional[shared_upload.Upload] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostUploadResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    created_upload: Optional[str] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
