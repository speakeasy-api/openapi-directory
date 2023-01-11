import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class VatLookupPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VatLookupRequestBody:
    name: str = dataclasses.field(metadata={'form': { 'field_name': 'name' }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'address' }})
    

@dataclasses.dataclass
class VatLookupSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class VatLookupRequest:
    path_params: VatLookupPathParams = dataclasses.field()
    request: VatLookupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLookupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VatLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vat_lookup_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    vat_lookup_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
