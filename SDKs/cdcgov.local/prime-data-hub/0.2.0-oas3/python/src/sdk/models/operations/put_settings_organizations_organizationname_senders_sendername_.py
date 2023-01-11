import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sender as shared_sender
from ..shared import sender as shared_sender


@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams:
    organization_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationName', 'style': 'simple', 'explode': False }})
    sender_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'senderName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest:
    path_params: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams = dataclasses.field()
    security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity = dataclasses.field()
    request: Optional[shared_sender.SenderInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    senders: Optional[list[shared_sender.Sender]] = dataclasses.field(default=None)
    
