import dataclasses
from typing import Optional
from ..shared import pregamewp as shared_pregamewp


@dataclasses.dataclass
class GetPregameWinProbabilitiesQueryParams:
    season_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPregameWinProbabilitiesRequest:
    query_params: GetPregameWinProbabilitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPregameWinProbabilitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pregame_wps: Optional[list[shared_pregamewp.PregameWp]] = dataclasses.field(default=None)
    
