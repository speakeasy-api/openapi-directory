import dataclasses
from typing import Optional
from ..shared import repository_invitation as shared_repository_invitation


@dataclasses.dataclass
class ReposListInvitationsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListInvitationsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListInvitationsRequest:
    path_params: ReposListInvitationsPathParams = dataclasses.field()
    query_params: ReposListInvitationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListInvitationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_invitations: Optional[list[shared_repository_invitation.RepositoryInvitation]] = dataclasses.field(default=None)
    
