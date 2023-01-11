import dataclasses
from typing import Optional
from ..shared import playwp as shared_playwp


@dataclasses.dataclass
class GetWinProbabilityDataQueryParams:
    game_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWinProbabilityDataRequest:
    query_params: GetWinProbabilityDataQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWinProbabilityDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_wps: Optional[list[shared_playwp.PlayWp]] = dataclasses.field(default=None)
    
