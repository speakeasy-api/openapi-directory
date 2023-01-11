import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import uploadstatusquery as shared_uploadstatusquery
from ..shared import error as shared_error
from ..shared import uploadstatuses as shared_uploadstatuses


@dataclasses.dataclass
class FetchUploadStatusesSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchUploadStatusesRequest:
    security: FetchUploadStatusesSecurity = dataclasses.field()
    request: Optional[shared_uploadstatusquery.UploadStatusQuery] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FetchUploadStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    upload_statuses: Optional[shared_uploadstatuses.UploadStatuses] = dataclasses.field(default=None)
    
