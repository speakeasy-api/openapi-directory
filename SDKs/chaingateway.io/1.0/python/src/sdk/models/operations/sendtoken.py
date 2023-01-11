import dataclasses
from typing import Optional
from ..shared import sendtokenrequest as shared_sendtokenrequest
from ..shared import sendtoken as shared_sendtoken


@dataclasses.dataclass
class SendTokenHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendTokenRequest:
    headers: SendTokenHeaders = dataclasses.field()
    request: shared_sendtokenrequest.SendTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    send_token: Optional[shared_sendtoken.SendToken] = dataclasses.field(default=None)
    
