import dataclasses
from typing import Optional
from ..shared import playergame as shared_playergame


@dataclasses.dataclass
class GetPlayerGameStatsQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayerGameStatsRequest:
    query_params: GetPlayerGameStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayerGameStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[shared_playergame.PlayerGame]] = dataclasses.field(default=None)
    
