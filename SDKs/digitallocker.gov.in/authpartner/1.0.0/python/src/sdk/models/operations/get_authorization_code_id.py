import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAuthorizationCodeIDQueryParams:
    redirect_uri: str = dataclasses.field(metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    response_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'response_type', 'style': 'form', 'explode': True }})
    state: str = dataclasses.field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    code_challenge: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Code_challenge', 'style': 'form', 'explode': True }})
    code_challenge_method: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Code_challenge_method', 'style': 'form', 'explode': True }})
    verified_mobile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Verified_mobile', 'style': 'form', 'explode': True }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    dl_flow: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dl_flow', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAuthorizationCodeIDSecurity:
    oauth_authorize_code: shared_security.SchemeOauthAuthorizeCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAuthorizationCodeIDRequest:
    query_params: GetAuthorizationCodeIDQueryParams = dataclasses.field()
    security: GetAuthorizationCodeIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorizationCodeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sample: Optional[Any] = dataclasses.field(default=None)
    
