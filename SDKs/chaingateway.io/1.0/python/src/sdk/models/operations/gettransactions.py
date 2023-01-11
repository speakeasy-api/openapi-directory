import dataclasses
from typing import Optional
from ..shared import gettransactionsrequest as shared_gettransactionsrequest
from ..shared import gettransactions as shared_gettransactions


@dataclasses.dataclass
class GetTransactionsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionsRequest:
    headers: GetTransactionsHeaders = dataclasses.field()
    request: shared_gettransactionsrequest.GetTransactionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_transactions: Optional[shared_gettransactions.GetTransactions] = dataclasses.field(default=None)
    
