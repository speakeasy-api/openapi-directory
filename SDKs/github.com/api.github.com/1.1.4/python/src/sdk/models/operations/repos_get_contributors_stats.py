import dataclasses
from typing import Optional
from ..shared import contributor_activity as shared_contributor_activity


@dataclasses.dataclass
class ReposGetContributorsStatsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetContributorsStatsRequest:
    path_params: ReposGetContributorsStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetContributorsStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contributor_activities: Optional[list[shared_contributor_activity.ContributorActivity]] = dataclasses.field(default=None)
    
