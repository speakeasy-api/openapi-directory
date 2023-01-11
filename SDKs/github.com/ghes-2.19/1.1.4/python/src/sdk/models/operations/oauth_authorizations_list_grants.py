import dataclasses
from typing import Optional
from ..shared import application_grant as shared_application_grant
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OauthAuthorizationsListGrantsQueryParams:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OauthAuthorizationsListGrantsRequest:
    query_params: OauthAuthorizationsListGrantsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsListGrantsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    application_grants: Optional[list[shared_application_grant.ApplicationGrant]] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
