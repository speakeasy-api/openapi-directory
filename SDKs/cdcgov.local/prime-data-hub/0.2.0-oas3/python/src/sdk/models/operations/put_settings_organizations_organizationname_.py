import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization1 as shared_organization1
from ..shared import organization as shared_organization


@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNamePathParams = dataclasses.field()
    security: PutSettingsOrganizationsOrganizationNameSecurity = dataclasses.field()
    request: Optional[shared_organization1.Organization1] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
