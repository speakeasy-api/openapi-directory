import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organizationinvitationcreation as shared_organizationinvitationcreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import organizationinvitation as shared_organizationinvitation


@dataclasses.dataclass
class CreateOrganizationInvitationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateOrganizationInvitationRequest:
    security: CreateOrganizationInvitationSecurity = dataclasses.field()
    request: Optional[shared_organizationinvitationcreation.OrganizationInvitationCreation] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    organization_invitation: Optional[shared_organizationinvitation.OrganizationInvitation] = dataclasses.field(default=None)
    
