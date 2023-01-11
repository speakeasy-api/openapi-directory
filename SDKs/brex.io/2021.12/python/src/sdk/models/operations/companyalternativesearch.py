import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyAlternativeSearchPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyAlternativeSearchRequestBody:
    address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'address' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'phone' }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'url' }})
    vat: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vat' }})
    

@dataclasses.dataclass
class CompanyAlternativeSearchSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyAlternativeSearchRequest:
    path_params: CompanyAlternativeSearchPathParams = dataclasses.field()
    security: CompanyAlternativeSearchSecurity = dataclasses.field()
    request: Optional[CompanyAlternativeSearchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CompanyAlternativeSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_alternative_search_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_alternative_search_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
