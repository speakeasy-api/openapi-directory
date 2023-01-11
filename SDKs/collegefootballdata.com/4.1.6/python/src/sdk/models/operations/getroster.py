import dataclasses
from typing import Optional
from ..shared import player as shared_player


@dataclasses.dataclass
class GetRosterQueryParams:
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRosterRequest:
    query_params: GetRosterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRosterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[shared_player.Player]] = dataclasses.field(default=None)
    
