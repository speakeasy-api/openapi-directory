import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TinVerificationBasicCheckQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    tin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TinVerificationBasicCheckSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TinVerificationBasicCheckRequest:
    query_params: TinVerificationBasicCheckQueryParams = dataclasses.field()
    security: TinVerificationBasicCheckSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TinVerificationBasicCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tin_verification_basic_check_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    tin_verification_basic_check_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
