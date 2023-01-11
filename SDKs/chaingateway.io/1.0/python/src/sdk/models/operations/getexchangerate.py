import dataclasses
from typing import Optional
from ..shared import getexchangeraterequest as shared_getexchangeraterequest
from ..shared import getexchangerate as shared_getexchangerate


@dataclasses.dataclass
class GetExchangeRateHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExchangeRateRequest:
    headers: GetExchangeRateHeaders = dataclasses.field()
    request: shared_getexchangeraterequest.GetExchangeRateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetExchangeRateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_exchange_rate: Optional[shared_getexchangerate.GetExchangeRate] = dataclasses.field(default=None)
    
