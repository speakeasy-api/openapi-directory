import dataclasses
from typing import Optional
from ..shared import authorization_with_user as shared_authorization_with_user


@dataclasses.dataclass
class OauthAuthorizationsResetAuthorizationPathParams:
    access_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OauthAuthorizationsResetAuthorizationRequest:
    path_params: OauthAuthorizationsResetAuthorizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OauthAuthorizationsResetAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization_with_user: Optional[shared_authorization_with_user.AuthorizationWithUser] = dataclasses.field(default=None)
    
