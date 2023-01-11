import dataclasses
from typing import Optional
from ..shared import connectionidrequestbody as shared_connectionidrequestbody
from ..shared import connectionread as shared_connectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetConnectionRequest:
    request: shared_connectionidrequestbody.ConnectionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection_read: Optional[shared_connectionread.ConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
