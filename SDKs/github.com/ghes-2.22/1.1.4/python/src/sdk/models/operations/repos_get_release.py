import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import release as shared_release


@dataclasses.dataclass
class ReposGetReleasePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetReleaseRequest:
    path_params: ReposGetReleasePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetReleaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    release: Optional[shared_release.Release] = dataclasses.field(default=None)
    
