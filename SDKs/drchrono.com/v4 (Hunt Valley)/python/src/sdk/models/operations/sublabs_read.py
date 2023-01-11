import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import labvendorlocation as shared_labvendorlocation


@dataclasses.dataclass
class SublabsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SublabsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SublabsReadRequest:
    path_params: SublabsReadPathParams = dataclasses.field()
    security: SublabsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SublabsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_vendor_location: Optional[shared_labvendorlocation.LabVendorLocation] = dataclasses.field(default=None)
    
