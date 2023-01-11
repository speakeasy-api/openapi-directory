import dataclasses
from typing import Optional
from ..shared import genericresponse as shared_genericresponse
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetSubUserKeysGetSubUserKeysGetQueryParams:
    api_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubUserKeysGetSubUserKeysGetRequest:
    query_params: GetSubUserKeysGetSubUserKeysGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubUserKeysGetSubUserKeysGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    generic_response: Optional[shared_genericresponse.GenericResponse] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
