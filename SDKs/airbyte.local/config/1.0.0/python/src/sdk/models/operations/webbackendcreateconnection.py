import dataclasses
from typing import Optional
from ..shared import webbackendconnectioncreate as shared_webbackendconnectioncreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import webbackendconnectionread as shared_webbackendconnectionread


@dataclasses.dataclass
class WebBackendCreateConnectionRequest:
    request: shared_webbackendconnectioncreate.WebBackendConnectionCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendCreateConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    web_backend_connection_read: Optional[shared_webbackendconnectionread.WebBackendConnectionRead] = dataclasses.field(default=None)
    
