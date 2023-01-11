import dataclasses
from typing import Optional
from ..shared import sourcecoreconfig as shared_sourcecoreconfig
from ..shared import invalidinputexceptioninfo as shared_invalidinputexceptioninfo
from ..shared import sourcediscoverschemaread as shared_sourcediscoverschemaread


@dataclasses.dataclass
class ExecuteSourceDiscoverSchemaRequest:
    request: shared_sourcecoreconfig.SourceCoreConfig = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteSourceDiscoverSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_input_exception_info: Optional[shared_invalidinputexceptioninfo.InvalidInputExceptionInfo] = dataclasses.field(default=None)
    source_discover_schema_read: Optional[shared_sourcediscoverschemaread.SourceDiscoverSchemaRead] = dataclasses.field(default=None)
    
