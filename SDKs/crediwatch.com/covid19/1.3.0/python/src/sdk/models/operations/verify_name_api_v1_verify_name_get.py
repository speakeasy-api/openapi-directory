import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import verifyname as shared_verifyname


@dataclasses.dataclass
class VerifyNameAPIV1VerifyNameGetQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VerifyNameAPIV1VerifyNameGetRequest:
    query_params: VerifyNameAPIV1VerifyNameGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class VerifyNameAPIV1VerifyNameGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    verify_name: Optional[shared_verifyname.VerifyName] = dataclasses.field(default=None)
    
