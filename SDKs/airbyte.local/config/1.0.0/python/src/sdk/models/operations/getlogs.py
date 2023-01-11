import dataclasses
from typing import Optional
from ..shared import logsrequestbody as shared_logsrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetLogsRequest:
    request: shared_logsrequestbody.LogsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetLogsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    get_logs_200_text_plain_binary_string: Optional[str] = dataclasses.field(default=None)
    
