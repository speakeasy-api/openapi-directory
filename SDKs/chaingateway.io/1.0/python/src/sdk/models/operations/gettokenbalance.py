import dataclasses
from typing import Optional
from ..shared import gettokenbalancerequest as shared_gettokenbalancerequest
from ..shared import gettokenbalance as shared_gettokenbalance


@dataclasses.dataclass
class GetTokenBalanceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTokenBalanceRequest:
    headers: GetTokenBalanceHeaders = dataclasses.field()
    request: shared_gettokenbalancerequest.GetTokenBalanceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTokenBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_token_balance: Optional[shared_gettokenbalance.GetTokenBalance] = dataclasses.field(default=None)
    
