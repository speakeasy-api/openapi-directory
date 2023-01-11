import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountCreateOAuth2SessionPathParams:
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountCreateOAuth2SessionQueryParams:
    failure: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'failure', 'style': 'form', 'explode': True }})
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scopes', 'style': 'form', 'explode': True }})
    success: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'success', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AccountCreateOAuth2SessionSecurity:
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountCreateOAuth2SessionRequest:
    path_params: AccountCreateOAuth2SessionPathParams = dataclasses.field()
    query_params: AccountCreateOAuth2SessionQueryParams = dataclasses.field()
    security: AccountCreateOAuth2SessionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountCreateOAuth2SessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
