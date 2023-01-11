import dataclasses
from typing import Optional
from ..shared import jobidrequestbody as shared_jobidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import jobinforead as shared_jobinforead
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetJobInfoRequest:
    request: shared_jobidrequestbody.JobIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetJobInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    job_info_read: Optional[shared_jobinforead.JobInfoRead] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
