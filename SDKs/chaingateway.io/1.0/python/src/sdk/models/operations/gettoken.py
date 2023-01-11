import dataclasses
from typing import Optional
from ..shared import gettokenrequest as shared_gettokenrequest
from ..shared import gettoken as shared_gettoken


@dataclasses.dataclass
class GetTokenHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTokenRequest:
    headers: GetTokenHeaders = dataclasses.field()
    request: shared_gettokenrequest.GetTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_token: Optional[shared_gettoken.GetToken] = dataclasses.field(default=None)
    
