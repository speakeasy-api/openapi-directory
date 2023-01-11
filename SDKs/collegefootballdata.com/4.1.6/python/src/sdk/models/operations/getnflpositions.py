import dataclasses
from typing import Optional
from ..shared import draftposition as shared_draftposition


@dataclasses.dataclass
class GetNflPositionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    draft_positions: Optional[list[shared_draftposition.DraftPosition]] = dataclasses.field(default=None)
    
