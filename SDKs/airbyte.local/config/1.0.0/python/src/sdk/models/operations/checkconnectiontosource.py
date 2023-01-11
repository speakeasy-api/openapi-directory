import dataclasses
from typing import Optional
from ..shared import sourceidrequestbody as shared_sourceidrequestbody
from ..shared import checkconnectionread as shared_checkconnectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class CheckConnectionToSourceRequest:
    request: shared_sourceidrequestbody.SourceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckConnectionToSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_connection_read: Optional[shared_checkconnectionread.CheckConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
