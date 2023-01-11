import dataclasses
from typing import Optional
from ..shared import listaddresses as shared_listaddresses


@dataclasses.dataclass
class ListAddressesHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAddressesRequest:
    headers: ListAddressesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class ListAddressesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_addresses: Optional[shared_listaddresses.ListAddresses] = dataclasses.field(default=None)
    
