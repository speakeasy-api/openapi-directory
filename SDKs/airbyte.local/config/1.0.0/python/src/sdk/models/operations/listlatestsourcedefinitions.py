import dataclasses
from typing import Optional
from ..shared import sourcedefinitionreadlist as shared_sourcedefinitionreadlist


@dataclasses.dataclass
class ListLatestSourceDefinitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_definition_read_list: Optional[shared_sourcedefinitionreadlist.SourceDefinitionReadList] = dataclasses.field(default=None)
    
