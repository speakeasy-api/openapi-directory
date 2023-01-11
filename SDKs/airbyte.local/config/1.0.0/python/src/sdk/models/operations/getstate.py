import dataclasses
from typing import Optional
from ..shared import connectionidrequestbody as shared_connectionidrequestbody
from ..shared import connectionstate as shared_connectionstate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetStateRequest:
    request: shared_connectionidrequestbody.ConnectionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection_state: Optional[shared_connectionstate.ConnectionState] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
