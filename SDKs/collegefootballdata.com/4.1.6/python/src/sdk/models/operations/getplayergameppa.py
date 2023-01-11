import dataclasses
from typing import Optional
from ..shared import playergameppa as shared_playergameppa


@dataclasses.dataclass
class GetPlayerGamePpaQueryParams:
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    player_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'playerId', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    threshold: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayerGamePpaRequest:
    query_params: GetPlayerGamePpaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayerGamePpaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_ppas: Optional[list[shared_playergameppa.PlayerGamePpa]] = dataclasses.field(default=None)
    
