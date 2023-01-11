import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReposGetPunchCardStatsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetPunchCardStatsRequest:
    path_params: ReposGetPunchCardStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetPunchCardStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_frequency_stats: Optional[list[list[int]]] = dataclasses.field(default=None)
    
