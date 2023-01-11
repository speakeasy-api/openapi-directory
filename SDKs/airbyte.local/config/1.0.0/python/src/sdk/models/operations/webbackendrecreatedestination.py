import dataclasses
from typing import Optional
from ..shared import destinationrecreate as shared_destinationrecreate
from ..shared import destinationread as shared_destinationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class WebBackendRecreateDestinationRequest:
    request: shared_destinationrecreate.DestinationRecreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendRecreateDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_read: Optional[shared_destinationread.DestinationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
