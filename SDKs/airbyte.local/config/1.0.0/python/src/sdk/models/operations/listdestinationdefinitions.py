import dataclasses
from typing import Optional
from ..shared import destinationdefinitionreadlist as shared_destinationdefinitionreadlist


@dataclasses.dataclass
class ListDestinationDefinitionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    destination_definition_read_list: Optional[shared_destinationdefinitionreadlist.DestinationDefinitionReadList] = dataclasses.field(default=None)
    
