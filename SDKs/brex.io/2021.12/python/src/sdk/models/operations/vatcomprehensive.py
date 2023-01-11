import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class VatComprehensivePathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VatComprehensiveRequestBody:
    vat_number: str = dataclasses.field(metadata={'form': { 'field_name': 'vatNumber' }})
    company_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    company_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'companyNumber' }})
    

@dataclasses.dataclass
class VatComprehensiveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class VatComprehensiveRequest:
    path_params: VatComprehensivePathParams = dataclasses.field()
    request: VatComprehensiveRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatComprehensiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VatComprehensiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    vat_comprehensive_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    vat_comprehensive_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
