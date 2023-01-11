import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class GetSettingsOrganizationsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsRequest:
    security: GetSettingsOrganizationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsOrganizationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    organizations: Optional[list[shared_organization.Organization]] = dataclasses.field(default=None)
    
