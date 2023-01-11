import dataclasses
from typing import Optional
from ..shared import draftteam as shared_draftteam


@dataclasses.dataclass
class GetNflTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    draft_teams: Optional[list[shared_draftteam.DraftTeam]] = dataclasses.field(default=None)
    
