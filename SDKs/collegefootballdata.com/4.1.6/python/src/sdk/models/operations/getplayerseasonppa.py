import dataclasses
from typing import Optional
from ..shared import playerseasonppa as shared_playerseasonppa


@dataclasses.dataclass
class GetPlayerSeasonPpaQueryParams:
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    player_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'playerId', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    threshold: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayerSeasonPpaRequest:
    query_params: GetPlayerSeasonPpaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayerSeasonPpaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_ppas: Optional[list[shared_playerseasonppa.PlayerSeasonPpa]] = dataclasses.field(default=None)
    
