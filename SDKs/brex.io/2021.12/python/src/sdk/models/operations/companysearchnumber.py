import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanySearchNumberPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanySearchNumberQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanySearchNumberSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanySearchNumberRequest:
    path_params: CompanySearchNumberPathParams = dataclasses.field()
    query_params: CompanySearchNumberQueryParams = dataclasses.field()
    security: CompanySearchNumberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanySearchNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_search_number_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_search_number_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
