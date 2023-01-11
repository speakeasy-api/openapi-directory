import dataclasses
from typing import Optional
from ..shared import organization_invitation as shared_organization_invitation


@dataclasses.dataclass
class TeamsListPendingInvitationsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListPendingInvitationsInOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListPendingInvitationsInOrgRequest:
    path_params: TeamsListPendingInvitationsInOrgPathParams = dataclasses.field()
    query_params: TeamsListPendingInvitationsInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListPendingInvitationsInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_invitations: Optional[list[shared_organization_invitation.OrganizationInvitation]] = dataclasses.field(default=None)
    
