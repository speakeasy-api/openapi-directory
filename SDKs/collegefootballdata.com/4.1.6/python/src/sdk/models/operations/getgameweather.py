import dataclasses
from typing import Optional
from ..shared import gameweather as shared_gameweather


@dataclasses.dataclass
class GetGameWeatherQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGameWeatherRequest:
    query_params: GetGameWeatherQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGameWeatherResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    game_weathers: Optional[list[shared_gameweather.GameWeather]] = dataclasses.field(default=None)
    
