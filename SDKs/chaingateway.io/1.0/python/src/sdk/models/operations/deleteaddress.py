import dataclasses
from typing import Optional
from ..shared import deleteaddressrequest as shared_deleteaddressrequest
from ..shared import deleteaddress as shared_deleteaddress


@dataclasses.dataclass
class DeleteAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAddressRequest:
    headers: DeleteAddressHeaders = dataclasses.field()
    request: shared_deleteaddressrequest.DeleteAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_address: Optional[shared_deleteaddress.DeleteAddress] = dataclasses.field(default=None)
    
