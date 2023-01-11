import dataclasses
from typing import Optional
from ..shared import sourcecreate as shared_sourcecreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import sourceread as shared_sourceread


@dataclasses.dataclass
class CreateSourceRequest:
    request: shared_sourcecreate.SourceCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    source_read: Optional[shared_sourceread.SourceRead] = dataclasses.field(default=None)
    
