import dataclasses
from typing import Optional
from ..shared import signin as shared_signin
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import keyfailure as shared_keyfailure
from ..shared import signinresponse as shared_signinresponse


@dataclasses.dataclass
class PostSigninRequest:
    request: Optional[shared_signin.Signin] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSigninResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    key_failure: Optional[shared_keyfailure.KeyFailure] = dataclasses.field(default=None)
    signin_response: Optional[shared_signinresponse.SigninResponse] = dataclasses.field(default=None)
    
