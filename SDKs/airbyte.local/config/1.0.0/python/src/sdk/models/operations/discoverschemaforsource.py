import dataclasses
from typing import Optional
from ..shared import sourceidrequestbody as shared_sourceidrequestbody
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import notfoundknownexceptioninfo as shared_notfoundknownexceptioninfo
from ..shared import sourcediscoverschemaread as shared_sourcediscoverschemaread


@dataclasses.dataclass
class DiscoverSchemaForSourceRequest:
    request: shared_sourceidrequestbody.SourceIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DiscoverSchemaForSourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    not_found_known_exception_info: Optional[shared_notfoundknownexceptioninfo.NotFoundKnownExceptionInfo] = dataclasses.field(default=None)
    source_discover_schema_read: Optional[shared_sourcediscoverschemaread.SourceDiscoverSchemaRead] = dataclasses.field(default=None)
    
