import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TinVerificationNameLookupQueryParams:
    tin: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TinVerificationNameLookupSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class TinVerificationNameLookupRequest:
    query_params: TinVerificationNameLookupQueryParams = dataclasses.field()
    security: TinVerificationNameLookupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TinVerificationNameLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tin_verification_name_lookup_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    tin_verification_name_lookup_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
