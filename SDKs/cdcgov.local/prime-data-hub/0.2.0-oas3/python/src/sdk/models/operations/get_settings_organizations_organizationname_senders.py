import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sender as shared_sender


@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameSendersPathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameSendersSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameSendersRequest:
    path_params: GetSettingsOrganizationsOrganizationNameSendersPathParams = dataclasses.field()
    security: GetSettingsOrganizationsOrganizationNameSendersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameSendersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    senders: Optional[list[shared_sender.Sender]] = dataclasses.field(default=None)
    
