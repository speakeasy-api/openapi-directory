import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import verifyphone as shared_verifyphone


@dataclasses.dataclass
class VerifyBusinessAPIV1VerifyPhoneGetQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    locking_period: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locking_period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VerifyBusinessAPIV1VerifyPhoneGetRequest:
    query_params: VerifyBusinessAPIV1VerifyPhoneGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VerifyBusinessAPIV1VerifyPhoneGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    verify_phone: Optional[shared_verifyphone.VerifyPhone] = dataclasses.field(default=None)
    
