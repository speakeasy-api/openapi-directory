import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyDeepsearchLeiPathParams:
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyDeepsearchLeiQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanyDeepsearchLeiSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyDeepsearchLeiRequest:
    path_params: CompanyDeepsearchLeiPathParams = dataclasses.field()
    query_params: CompanyDeepsearchLeiQueryParams = dataclasses.field()
    security: CompanyDeepsearchLeiSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyDeepsearchLeiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_deepsearch_lei_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    company_deepsearch_lei_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
