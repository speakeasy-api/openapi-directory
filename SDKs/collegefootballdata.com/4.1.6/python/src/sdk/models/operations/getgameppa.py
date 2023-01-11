import dataclasses
from typing import Optional
from ..shared import gameppa as shared_gameppa


@dataclasses.dataclass
class GetGamePpaQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGamePpaRequest:
    query_params: GetGamePpaQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGamePpaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    game_ppas: Optional[list[shared_gameppa.GamePpa]] = dataclasses.field(default=None)
    
