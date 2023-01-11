import dataclasses
from typing import Optional
from ..shared import release as shared_release


@dataclasses.dataclass
class ReposGetLatestReleasePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetLatestReleaseRequest:
    path_params: ReposGetLatestReleasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetLatestReleaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    release: Optional[shared_release.Release] = dataclasses.field(default=None)
    
