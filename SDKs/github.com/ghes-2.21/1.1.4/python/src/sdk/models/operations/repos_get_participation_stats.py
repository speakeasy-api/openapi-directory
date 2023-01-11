import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import participation_stats as shared_participation_stats


@dataclasses.dataclass
class ReposGetParticipationStatsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetParticipationStatsRequest:
    path_params: ReposGetParticipationStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetParticipationStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    participation_stats: Optional[shared_participation_stats.ParticipationStats] = dataclasses.field(default=None)
    
