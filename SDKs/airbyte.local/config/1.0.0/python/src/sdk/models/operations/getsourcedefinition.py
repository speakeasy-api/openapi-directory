import dataclasses
from typing import Optional
from ..shared import sourcedefinitionidrequestbody as shared_sourcedefinitionidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import sourcedefinitionread as shared_sourcedefinitionread


@dataclasses.dataclass
class GetSourceDefinitionRequest:
    request: shared_sourcedefinitionidrequestbody.SourceDefinitionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSourceDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    source_definition_read: Optional[shared_sourcedefinitionread.SourceDefinitionRead] = dataclasses.field(default=None)
    
