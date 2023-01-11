import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class EinVerificationComprehensiveQueryParams:
    ein: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ein', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EinVerificationComprehensiveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EinVerificationComprehensiveRequest:
    query_params: EinVerificationComprehensiveQueryParams = dataclasses.field()
    security: EinVerificationComprehensiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EinVerificationComprehensiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ein_verification_comprehensive_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    ein_verification_comprehensive_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
