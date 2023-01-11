import dataclasses
from typing import Optional
from ..shared import signin as shared_signin
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import userrecord as shared_userrecord


@dataclasses.dataclass
class PutSigninSigninIDPathParams:
    signin_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSigninSigninIDRequest:
    path_params: PutSigninSigninIDPathParams = dataclasses.field()
    request: Optional[shared_signin.Signin] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSigninSigninIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    user_record: Optional[shared_userrecord.UserRecord] = dataclasses.field(default=None)
    
