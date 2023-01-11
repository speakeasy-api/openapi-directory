import dataclasses
from typing import Optional
from ..shared import subscribeaddressrequest as shared_subscribeaddressrequest
from ..shared import subscribeaddress as shared_subscribeaddress


@dataclasses.dataclass
class SubscribeAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubscribeAddressRequest:
    headers: SubscribeAddressHeaders = dataclasses.field()
    request: shared_subscribeaddressrequest.SubscribeAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscribeAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscribe_address: Optional[shared_subscribeaddress.SubscribeAddress] = dataclasses.field(default=None)
    
