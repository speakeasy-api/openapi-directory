import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import organization_invitation as shared_organization_invitation


@dataclasses.dataclass
class OrgsListPendingInvitationsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListPendingInvitationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListPendingInvitationsRequest:
    path_params: OrgsListPendingInvitationsPathParams = dataclasses.field()
    query_params: OrgsListPendingInvitationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListPendingInvitationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    organization_invitations: Optional[list[shared_organization_invitation.OrganizationInvitation]] = dataclasses.field(default=None)
    
