import dataclasses
from typing import Optional
from ..shared import webbackendconnectionrequestbody as shared_webbackendconnectionrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import webbackendconnectionread as shared_webbackendconnectionread


@dataclasses.dataclass
class WebBackendGetConnectionRequest:
    request: shared_webbackendconnectionrequestbody.WebBackendConnectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendGetConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    web_backend_connection_read: Optional[shared_webbackendconnectionread.WebBackendConnectionRead] = dataclasses.field(default=None)
    
