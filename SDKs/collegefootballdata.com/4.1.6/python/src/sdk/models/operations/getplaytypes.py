import dataclasses
from typing import Optional
from ..shared import playtype as shared_playtype


@dataclasses.dataclass
class GetPlayTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_types: Optional[list[shared_playtype.PlayType]] = dataclasses.field(default=None)
    
