import dataclasses
from typing import Optional
from ..shared import exportaddressrequest as shared_exportaddressrequest
from ..shared import exportaddress as shared_exportaddress


@dataclasses.dataclass
class ExportAddressHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportAddressRequest:
    headers: ExportAddressHeaders = dataclasses.field()
    request: shared_exportaddressrequest.ExportAddressRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_address: Optional[shared_exportaddress.ExportAddress] = dataclasses.field(default=None)
    
