import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import destinationupdate as shared_destinationupdate
from ..shared import destinationread as shared_destinationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class UpdateDestinationRequest:
    request: shared_destinationupdate.DestinationUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_read: Optional[shared_destinationread.DestinationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
