import dataclasses
from typing import Optional
from ..shared import sourcedefinitionidrequestbody as shared_sourcedefinitionidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import sourcedefinitionspecificationread as shared_sourcedefinitionspecificationread


@dataclasses.dataclass
class GetSourceDefinitionSpecificationRequest:
    request: shared_sourcedefinitionidrequestbody.SourceDefinitionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetSourceDefinitionSpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    source_definition_specification_read: Optional[shared_sourcedefinitionspecificationread.SourceDefinitionSpecificationRead] = dataclasses.field(default=None)
    
