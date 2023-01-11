import dataclasses
from typing import Optional
from ..shared import authorization as shared_authorization
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OauthAuthorizationsListAuthorizationsQueryParams:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OauthAuthorizationsListAuthorizationsRequest:
    query_params: OauthAuthorizationsListAuthorizationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsListAuthorizationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    authorizations: Optional[list[shared_authorization.Authorization]] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
