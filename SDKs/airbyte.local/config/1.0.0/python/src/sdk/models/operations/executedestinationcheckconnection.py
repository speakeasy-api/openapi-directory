import dataclasses
from typing import Optional
from ..shared import destinationcoreconfig as shared_destinationcoreconfig
from ..shared import checkconnectionread as shared_checkconnectionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class ExecuteDestinationCheckConnectionRequest:
    request: shared_destinationcoreconfig.DestinationCoreConfig = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteDestinationCheckConnectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    check_connection_read: Optional[shared_checkconnectionread.CheckConnectionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
