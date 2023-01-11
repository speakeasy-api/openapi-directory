import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class AppsGetRepoInstallationPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetRepoInstallationHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetRepoInstallationRequest:
    headers: AppsGetRepoInstallationHeaders = dataclasses.field()
    path_params: AppsGetRepoInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetRepoInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    installation_ghes_2: Optional[shared_installation_ghes_2.InstallationGhes2] = dataclasses.field(default=None)
    
