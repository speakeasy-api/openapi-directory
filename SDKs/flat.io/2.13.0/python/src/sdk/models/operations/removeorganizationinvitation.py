import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class RemoveOrganizationInvitationPathParams:
    invitation: str = dataclasses.field(metadata={'path_param': { 'field_name': 'invitation', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveOrganizationInvitationSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveOrganizationInvitationRequest:
    path_params: RemoveOrganizationInvitationPathParams = dataclasses.field()
    security: RemoveOrganizationInvitationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveOrganizationInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
