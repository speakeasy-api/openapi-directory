import dataclasses
from typing import Optional
from ..shared import destinationcreate as shared_destinationcreate
from ..shared import destinationread as shared_destinationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class CreateDestinationRequest:
    request: shared_destinationcreate.DestinationCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_read: Optional[shared_destinationread.DestinationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
