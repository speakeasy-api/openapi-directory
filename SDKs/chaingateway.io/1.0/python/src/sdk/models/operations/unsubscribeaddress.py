import dataclasses
from typing import Optional
from ..shared import unsubscribeaddressrequest as shared_unsubscribeaddressrequest
from ..shared import unsubscribeaddress as shared_unsubscribeaddress


@dataclasses.dataclass
class UnsubscribeAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UnsubscribeAddressRequest:
    headers: UnsubscribeAddressHeaders = dataclasses.field()
    request: shared_unsubscribeaddressrequest.UnsubscribeAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UnsubscribeAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    unsubscribe_address: Optional[shared_unsubscribeaddress.UnsubscribeAddress] = dataclasses.field(default=None)
    
