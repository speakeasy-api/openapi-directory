import dataclasses
from typing import Optional
from ..shared import sourceidrequestbody as shared_sourceidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import sourceread as shared_sourceread


@dataclasses.dataclass
class GetSourceRequest:
    request: shared_sourceidrequestbody.SourceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    source_read: Optional[shared_sourceread.SourceRead] = dataclasses.field(default=None)
    
