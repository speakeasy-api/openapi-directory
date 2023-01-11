import dataclasses
from typing import Optional
from ..shared import connectioncreate as shared_connectioncreate
from ..shared import connectionread as shared_connectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class CreateConnectionRequest:
    request: shared_connectioncreate.ConnectionCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connection_read: Optional[shared_connectionread.ConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
