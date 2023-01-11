import dataclasses
from typing import Optional
from ..shared import organization_invitation as shared_organization_invitation


@dataclasses.dataclass
class TeamsListPendingInvitationsLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListPendingInvitationsLegacyQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListPendingInvitationsLegacyRequest:
    path_params: TeamsListPendingInvitationsLegacyPathParams = dataclasses.field()
    query_params: TeamsListPendingInvitationsLegacyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListPendingInvitationsLegacyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_invitations: Optional[list[shared_organization_invitation.OrganizationInvitation]] = dataclasses.field(default=None)
    
