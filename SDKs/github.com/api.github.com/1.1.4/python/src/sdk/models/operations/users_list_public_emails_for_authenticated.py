import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import email as shared_email


@dataclasses.dataclass
class UsersListPublicEmailsForAuthenticatedQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListPublicEmailsForAuthenticatedRequest:
    query_params: UsersListPublicEmailsForAuthenticatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListPublicEmailsForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    emails: Optional[list[shared_email.Email]] = dataclasses.field(default=None)
    
