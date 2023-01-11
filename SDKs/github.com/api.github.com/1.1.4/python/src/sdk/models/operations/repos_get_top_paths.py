import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import content_traffic as shared_content_traffic


@dataclasses.dataclass
class ReposGetTopPathsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetTopPathsRequest:
    path_params: ReposGetTopPathsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetTopPathsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    content_traffics: Optional[list[shared_content_traffic.ContentTraffic]] = dataclasses.field(default=None)
    
