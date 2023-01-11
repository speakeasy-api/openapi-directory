import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import uploadstatus as shared_uploadstatus


@dataclasses.dataclass
class FetchUploadStatusByIDPathParams:
    upload_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUploadStatusByIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchUploadStatusByIDRequest:
    path_params: FetchUploadStatusByIDPathParams = dataclasses.field()
    security: FetchUploadStatusByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchUploadStatusByIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    upload_status: Optional[shared_uploadstatus.UploadStatus] = dataclasses.field(default=None)
    
