import dataclasses
from typing import Optional
from ..shared import sourcecoreconfig as shared_sourcecoreconfig
from ..shared import checkconnectionread as shared_checkconnectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class ExecuteSourceCheckConnectionRequest:
    request: shared_sourcecoreconfig.SourceCoreConfig = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteSourceCheckConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_connection_read: Optional[shared_checkconnectionread.CheckConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
