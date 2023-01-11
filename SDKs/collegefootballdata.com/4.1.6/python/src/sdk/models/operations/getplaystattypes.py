import dataclasses
from typing import Optional
from ..shared import playstattype as shared_playstattype


@dataclasses.dataclass
class GetPlayStatTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_stat_types: Optional[list[shared_playstattype.PlayStatType]] = dataclasses.field(default=None)
    
