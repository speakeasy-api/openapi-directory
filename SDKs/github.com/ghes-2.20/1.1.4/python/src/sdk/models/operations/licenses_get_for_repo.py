import dataclasses
from typing import Optional
from ..shared import license_content as shared_license_content


@dataclasses.dataclass
class LicensesGetForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LicensesGetForRepoRequest:
    path_params: LicensesGetForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LicensesGetForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_content: Optional[shared_license_content.LicenseContent] = dataclasses.field(default=None)
    
