import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import systeminfo as shared_systeminfo


@dataclasses.dataclass
class GetSystemInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    system_info: Optional[shared_systeminfo.SystemInfo] = dataclasses.field(default=None)
    
