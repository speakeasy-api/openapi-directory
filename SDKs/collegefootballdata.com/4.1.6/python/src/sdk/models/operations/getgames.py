import dataclasses
from typing import Optional
from ..shared import game as shared_game


@dataclasses.dataclass
class GetGamesQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    away: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'away', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    home: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'home', 'style': 'form', 'explode': True }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGamesRequest:
    query_params: GetGamesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGamesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[shared_game.Game]] = dataclasses.field(default=None)
    
