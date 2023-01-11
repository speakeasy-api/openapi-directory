import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import responsemessage as shared_responsemessage


@dataclasses.dataclass
class InstitutionHrfeedUploadRequestBodyHrfeed:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    hrfeed: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'hrfeed' }})
    

@dataclasses.dataclass
class InstitutionHrfeedUploadRequestBody:
    hrfeed: Optional[InstitutionHrfeedUploadRequestBodyHrfeed] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class InstitutionHrfeedUploadSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class InstitutionHrfeedUploadRequest:
    security: InstitutionHrfeedUploadSecurity = dataclasses.field()
    request: Optional[InstitutionHrfeedUploadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class InstitutionHrfeedUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    response_message: Optional[shared_responsemessage.ResponseMessage] = dataclasses.field(default=None)
    
