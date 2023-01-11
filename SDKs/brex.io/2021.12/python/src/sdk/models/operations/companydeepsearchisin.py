import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyDeepsearchIsinRequestBody:
    isin: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'isin' }})
    

@dataclasses.dataclass
class CompanyDeepsearchIsinSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyDeepsearchIsinRequest:
    security: CompanyDeepsearchIsinSecurity = dataclasses.field()
    request: Optional[CompanyDeepsearchIsinRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CompanyDeepsearchIsinResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_deepsearch_isin_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_deepsearch_isin_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
