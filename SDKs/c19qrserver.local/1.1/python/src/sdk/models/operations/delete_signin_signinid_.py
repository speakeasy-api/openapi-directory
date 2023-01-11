import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken


@dataclasses.dataclass
class DeleteSigninSigninIDPathParams:
    signin_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSigninSigninIDRequest:
    path_params: DeleteSigninSigninIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSigninSigninIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    
