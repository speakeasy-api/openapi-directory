import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import installation as shared_installation


@dataclasses.dataclass
class AppsGetRepoInstallationPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetRepoInstallationRequest:
    path_params: AppsGetRepoInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetRepoInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    installation: Optional[shared_installation.Installation] = dataclasses.field(default=None)
    
