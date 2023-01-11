import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNamePathParams = dataclasses.field()
    security: DeleteSettingsOrganizationsOrganizationNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
