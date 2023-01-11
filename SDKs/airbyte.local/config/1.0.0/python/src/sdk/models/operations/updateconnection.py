import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import connectionupdate as shared_connectionupdate
from ..shared import connectionread as shared_connectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class UpdateConnectionRequest:
    request: shared_connectionupdate.ConnectionUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection_read: Optional[shared_connectionread.ConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
