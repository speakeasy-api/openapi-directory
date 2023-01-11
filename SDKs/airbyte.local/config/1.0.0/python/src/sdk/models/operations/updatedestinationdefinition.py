import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import destinationdefinitionupdate as shared_destinationdefinitionupdate
from ..shared import destinationdefinitionread as shared_destinationdefinitionread
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo


@dataclasses.dataclass
class UpdateDestinationDefinitionRequest:
    request: shared_destinationdefinitionupdate.DestinationDefinitionUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDestinationDefinitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_definition_read: Optional[shared_destinationdefinitionread.DestinationDefinitionRead] = dataclasses.field(default=None)
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    
