import dataclasses
from typing import Optional
from ..shared import sourcedefinitioncreate as shared_sourcedefinitioncreate
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import sourcedefinitionread as shared_sourcedefinitionread


@dataclasses.dataclass
class CreateSourceDefinitionRequest:
    request: Optional[shared_sourcedefinitioncreate.SourceDefinitionCreate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSourceDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    source_definition_read: Optional[shared_sourcedefinitionread.SourceDefinitionRead] = dataclasses.field(default=None)
    
