import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import signin as shared_signin


@dataclasses.dataclass
class GetSigninSigninIDPathParams:
    signin_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSigninSigninIDRequest:
    path_params: GetSigninSigninIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSigninSigninIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    signin: Optional[shared_signin.Signin] = dataclasses.field(default=None)
    
