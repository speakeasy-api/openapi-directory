import dataclasses
from typing import Optional
from ..shared import listsubscribedaddresses as shared_listsubscribedaddresses


@dataclasses.dataclass
class ListSubscribedAddressesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSubscribedAddressesRequest:
    headers: ListSubscribedAddressesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ListSubscribedAddressesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_subscribed_addresses: Optional[shared_listsubscribedaddresses.ListSubscribedAddresses] = dataclasses.field(default=None)
    
