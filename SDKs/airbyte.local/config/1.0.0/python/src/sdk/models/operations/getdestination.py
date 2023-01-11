import dataclasses
from typing import Optional
from ..shared import destinationidrequestbody as shared_destinationidrequestbody
from ..shared import destinationread as shared_destinationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetDestinationRequest:
    request: shared_destinationidrequestbody.DestinationIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_read: Optional[shared_destinationread.DestinationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
