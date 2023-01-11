import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class VatBasicPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VatBasicRequestBody:
    vat_number: str = dataclasses.field(metadata={'form': { 'field_name': 'vatNumber' }})
    company_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    company_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyNumber' }})
    

@dataclasses.dataclass
class VatBasicSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class VatBasicRequest:
    path_params: VatBasicPathParams = dataclasses.field()
    request: VatBasicRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatBasicSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VatBasicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vat_basic_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    vat_basic_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
