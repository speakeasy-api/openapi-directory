import dataclasses
from typing import Optional
from ..shared import community_profile as shared_community_profile


@dataclasses.dataclass
class ReposGetCommunityProfileMetricsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetCommunityProfileMetricsRequest:
    path_params: ReposGetCommunityProfileMetricsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetCommunityProfileMetricsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    community_profile: Optional[shared_community_profile.CommunityProfile] = dataclasses.field(default=None)
    
