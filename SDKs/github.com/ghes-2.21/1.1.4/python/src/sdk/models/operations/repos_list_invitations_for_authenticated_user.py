import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import repository_invitation as shared_repository_invitation


@dataclasses.dataclass
class ReposListInvitationsForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListInvitationsForAuthenticatedUserRequest:
    query_params: ReposListInvitationsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListInvitationsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repository_invitations: Optional[list[shared_repository_invitation.RepositoryInvitation]] = dataclasses.field(default=None)
    
