import dataclasses
from typing import Optional
from ..shared import destinationdefinitionidrequestbody as shared_destinationdefinitionidrequestbody
from ..shared import destinationdefinitionread as shared_destinationdefinitionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class GetDestinationDefinitionRequest:
    request: shared_destinationdefinitionidrequestbody.DestinationDefinitionIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDestinationDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_definition_read: Optional[shared_destinationdefinitionread.DestinationDefinitionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
