import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanySearchNamePathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanySearchNameQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanySearchNameSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanySearchNameRequest:
    path_params: CompanySearchNamePathParams = dataclasses.field()
    query_params: CompanySearchNameQueryParams = dataclasses.field()
    security: CompanySearchNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanySearchNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_search_name_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_search_name_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
