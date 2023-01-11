import dataclasses
from typing import Optional
from ..shared import clearaddressrequest as shared_clearaddressrequest
from ..shared import clearaddress as shared_clearaddress


@dataclasses.dataclass
class ClearAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClearAddressRequest:
    headers: ClearAddressHeaders = dataclasses.field()
    request: shared_clearaddressrequest.ClearAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ClearAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clear_address: Optional[shared_clearaddress.ClearAddress] = dataclasses.field(default=None)
    
