import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class IbanComprehensiveRequestBody:
    iban_number: str = dataclasses.field(metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclasses.dataclass
class IbanComprehensiveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class IbanComprehensiveRequest:
    request: IbanComprehensiveRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanComprehensiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class IbanComprehensiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    iban_comprehensive_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    oneapi_1v1_1iban_verification_1check_iban_post_responses_200_content_application_1json_schema: Optional[Any] = dataclasses.field(default=None)
    
