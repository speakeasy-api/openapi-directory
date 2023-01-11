import dataclasses
from typing import Optional
from ..shared import page_build_status as shared_page_build_status


@dataclasses.dataclass
class ReposRequestPagesBuildPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposRequestPagesBuildRequest:
    path_params: ReposRequestPagesBuildPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposRequestPagesBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    page_build_status: Optional[shared_page_build_status.PageBuildStatus] = dataclasses.field(default=None)
    
