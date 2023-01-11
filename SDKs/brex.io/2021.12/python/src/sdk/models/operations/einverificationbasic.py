import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class EinVerificationBasicQueryParams:
    ein: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ein', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EinVerificationBasicSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EinVerificationBasicRequest:
    query_params: EinVerificationBasicQueryParams = dataclasses.field()
    security: EinVerificationBasicSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EinVerificationBasicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ein_verification_basic_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    ein_verification_basic_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
