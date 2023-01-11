import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class EinVerificationLookupQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    tight: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tight', 'style': 'form', 'explode': True }})
    zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EinVerificationLookupSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class EinVerificationLookupRequest:
    query_params: EinVerificationLookupQueryParams = dataclasses.field()
    security: EinVerificationLookupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EinVerificationLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ein_verification_lookup_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    ein_verification_lookup_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
