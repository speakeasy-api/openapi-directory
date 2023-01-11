import dataclasses
from typing import Optional
from ..shared import destinationdefinitionidrequestbody as shared_destinationdefinitionidrequestbody
from ..shared import destinationdefinitionspecificationread as shared_destinationdefinitionspecificationread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetDestinationDefinitionSpecificationRequest:
    request: shared_destinationdefinitionidrequestbody.DestinationDefinitionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDestinationDefinitionSpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_definition_specification_read: Optional[shared_destinationdefinitionspecificationread.DestinationDefinitionSpecificationRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
