import dataclasses
from typing import Optional
from ..shared import gamelines as shared_gamelines


@dataclasses.dataclass
class GetLinesQueryParams:
    away: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'away', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    home: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'home', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLinesRequest:
    query_params: GetLinesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLinesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    game_lines: Optional[list[shared_gamelines.GameLines]] = dataclasses.field(default=None)
    
