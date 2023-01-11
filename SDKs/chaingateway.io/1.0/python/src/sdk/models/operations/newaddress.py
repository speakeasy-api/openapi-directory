import dataclasses
from typing import Optional
from ..shared import newaddressrequest as shared_newaddressrequest
from ..shared import newaddress as shared_newaddress


@dataclasses.dataclass
class NewAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewAddressRequest:
    headers: NewAddressHeaders = dataclasses.field()
    request: shared_newaddressrequest.NewAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NewAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    new_address: Optional[shared_newaddress.NewAddress] = dataclasses.field(default=None)
    
