import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sender as shared_sender


@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = dataclasses.field()
    security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sender: Optional[shared_sender.Sender] = dataclasses.field(default=None)
    
