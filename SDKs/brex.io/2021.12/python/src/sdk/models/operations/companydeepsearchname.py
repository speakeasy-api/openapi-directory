import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyDeepsearchNamePathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompanyDeepsearchNameSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyDeepsearchNameRequest:
    path_params: CompanyDeepsearchNamePathParams = dataclasses.field()
    security: CompanyDeepsearchNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyDeepsearchNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_deepsearch_name_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_deepsearch_name_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
