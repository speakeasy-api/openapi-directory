import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import receiver as shared_receiver


@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversPathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversPathParams = dataclasses.field()
    security: GetSettingsOrganizationsOrganizationNameReceiversSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    receivers: Optional[list[shared_receiver.Receiver]] = dataclasses.field(default=None)
    
