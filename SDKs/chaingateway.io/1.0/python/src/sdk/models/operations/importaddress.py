import dataclasses
from typing import Optional
from ..shared import importaddressrequest as shared_importaddressrequest
from ..shared import importaddress as shared_importaddress


@dataclasses.dataclass
class ImportAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportAddressRequest:
    headers: ImportAddressHeaders = dataclasses.field()
    request: shared_importaddressrequest.ImportAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_address: Optional[shared_importaddress.ImportAddress] = dataclasses.field(default=None)
    
