import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import receiver as shared_receiver


@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    receiver_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'receiverName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest:
    path_params: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams = dataclasses.field()
    security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    receiver: Optional[shared_receiver.Receiver] = dataclasses.field(default=None)
    
