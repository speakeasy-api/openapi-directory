import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import organizationinvitation as shared_organizationinvitation

class ListOrganizationInvitationsRoleEnum(str, Enum):
    USER = "user"
    TEACHER = "teacher"
    ADMIN = "admin"


@dataclasses.dataclass
class ListOrganizationInvitationsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next', 'style': 'form', 'explode': True }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'previous', 'style': 'form', 'explode': True }})
    role: Optional[ListOrganizationInvitationsRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOrganizationInvitationsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListOrganizationInvitationsRequest:
    query_params: ListOrganizationInvitationsQueryParams = dataclasses.field()
    security: ListOrganizationInvitationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListOrganizationInvitationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    organization_invitations: Optional[list[shared_organizationinvitation.OrganizationInvitation]] = dataclasses.field(default=None)
    
