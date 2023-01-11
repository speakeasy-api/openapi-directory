import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class IbanBasicRequestBody:
    iban_number: str = dataclasses.field(metadata={'form': { 'field_name': 'ibanNumber' }})
    

@dataclasses.dataclass
class IbanBasicSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class IbanBasicRequest:
    request: IbanBasicRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: IbanBasicSecurity = dataclasses.field()
    

@dataclasses.dataclass
class IbanBasicResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    iban_basic_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    iban_basic_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
