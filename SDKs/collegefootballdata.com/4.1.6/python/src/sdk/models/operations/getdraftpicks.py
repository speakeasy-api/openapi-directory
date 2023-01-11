import dataclasses
from typing import Optional
from ..shared import draftpick as shared_draftpick


@dataclasses.dataclass
class GetDraftPicksQueryParams:
    college: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'college', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    nfl_team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nflTeam', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDraftPicksRequest:
    query_params: GetDraftPicksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDraftPicksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    draft_picks: Optional[list[shared_draftpick.DraftPick]] = dataclasses.field(default=None)
    
