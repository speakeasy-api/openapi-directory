import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import keyfailure as shared_keyfailure
from ..shared import signin as shared_signin


@dataclasses.dataclass
class GetSigninsQueryParams:
    less_than: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'less_than', 'style': 'form', 'explode': True }})
    return_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'return_count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSigninsRequest:
    query_params: GetSigninsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSigninsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    key_failure: Optional[shared_keyfailure.KeyFailure] = dataclasses.field(default=None)
    signins: Optional[list[shared_signin.Signin]] = dataclasses.field(default=None)
    
