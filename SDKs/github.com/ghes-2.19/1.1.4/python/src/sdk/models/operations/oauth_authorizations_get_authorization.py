import dataclasses
from typing import Optional
from ..shared import authorization as shared_authorization
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class OauthAuthorizationsGetAuthorizationPathParams:
    authorization_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsGetAuthorizationRequest:
    path_params: OauthAuthorizationsGetAuthorizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsGetAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
