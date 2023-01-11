import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameRequest:
    path_params: GetSettingsOrganizationsOrganizationNamePathParams = dataclasses.field()
    security: GetSettingsOrganizationsOrganizationNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
