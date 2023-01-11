import dataclasses
from typing import Optional
from ..shared import destinationdefinitioncreate as shared_destinationdefinitioncreate
from ..shared import destinationdefinitionread as shared_destinationdefinitionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo


@dataclasses.dataclass
class CreateDestinationDefinitionRequest:
    request: Optional[shared_destinationdefinitioncreate.DestinationDefinitionCreate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDestinationDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_definition_read: Optional[shared_destinationdefinitionread.DestinationDefinitionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    
