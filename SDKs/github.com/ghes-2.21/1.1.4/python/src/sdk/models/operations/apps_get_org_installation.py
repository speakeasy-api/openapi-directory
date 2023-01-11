import dataclasses
from typing import Optional
from ..shared import installation_ghes_2 as shared_installation_ghes_2


@dataclasses.dataclass
class AppsGetOrgInstallationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetOrgInstallationHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppsGetOrgInstallationRequest:
    headers: AppsGetOrgInstallationHeaders = dataclasses.field()
    path_params: AppsGetOrgInstallationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AppsGetOrgInstallationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    installation_ghes_2: Optional[shared_installation_ghes_2.InstallationGhes2] = dataclasses.field(default=None)
    
