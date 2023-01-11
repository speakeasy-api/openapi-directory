import dataclasses
from typing import Optional
from ..shared import playerusage as shared_playerusage


@dataclasses.dataclass
class GetPlayerUsageQueryParams:
    year: int = dataclasses.field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    player_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'playerId', 'style': 'form', 'explode': True }})
    position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPlayerUsageRequest:
    query_params: GetPlayerUsageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPlayerUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_usages: Optional[list[shared_playerusage.PlayerUsage]] = dataclasses.field(default=None)
    
