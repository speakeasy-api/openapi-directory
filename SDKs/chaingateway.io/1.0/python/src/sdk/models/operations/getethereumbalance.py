import dataclasses
from typing import Optional
from ..shared import getethereumbalancerequest as shared_getethereumbalancerequest
from ..shared import getethereumbalance as shared_getethereumbalance


@dataclasses.dataclass
class GetEthereumBalanceHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEthereumBalanceRequest:
    headers: GetEthereumBalanceHeaders = dataclasses.field()
    request: shared_getethereumbalancerequest.GetEthereumBalanceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetEthereumBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ethereum_balance: Optional[shared_getethereumbalance.GetEthereumBalance] = dataclasses.field(default=None)
    
