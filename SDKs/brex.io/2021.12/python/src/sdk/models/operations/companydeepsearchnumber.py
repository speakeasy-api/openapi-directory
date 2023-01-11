import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyDeepsearchNumberPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyDeepsearchNumberSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyDeepsearchNumberRequest:
    path_params: CompanyDeepsearchNumberPathParams = dataclasses.field()
    security: CompanyDeepsearchNumberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyDeepsearchNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_deepsearch_number_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_deepsearch_number_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
