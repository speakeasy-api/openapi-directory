import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import webbackendconnectionupdate as shared_webbackendconnectionupdate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import webbackendconnectionread as shared_webbackendconnectionread


@dataclasses.dataclass
class WebBackendUpdateConnectionRequest:
    request: shared_webbackendconnectionupdate.WebBackendConnectionUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendUpdateConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    web_backend_connection_read: Optional[shared_webbackendconnectionread.WebBackendConnectionRead] = dataclasses.field(default=None)
    
