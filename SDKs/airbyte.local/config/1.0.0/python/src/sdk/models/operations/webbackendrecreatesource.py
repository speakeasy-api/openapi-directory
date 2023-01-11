import dataclasses
from typing import Optional
from ..shared import sourcerecreate as shared_sourcerecreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import sourceread as shared_sourceread


@dataclasses.dataclass
class WebBackendRecreateSourceRequest:
    request: shared_sourcerecreate.SourceRecreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WebBackendRecreateSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    source_read: Optional[shared_sourceread.SourceRead] = dataclasses.field(default=None)
    
