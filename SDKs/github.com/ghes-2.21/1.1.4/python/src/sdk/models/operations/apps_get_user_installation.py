import dataclasses
from typing import Optional
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class AppsGetUserInstallationPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetUserInstallationHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetUserInstallationRequest:
    headers: AppsGetUserInstallationHeaders = dataclasses.field()
    path_params: AppsGetUserInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetUserInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    installation_ghes_2: Optional[shared_installation_ghes_2.InstallationGhes2] = dataclasses.field(default=None)
    
