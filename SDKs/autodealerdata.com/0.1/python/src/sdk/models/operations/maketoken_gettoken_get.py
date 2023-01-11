import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import jsonwebtoken as shared_jsonwebtoken


@dataclasses.dataclass
class MakeTokenGetTokenGetQueryParams:
    api_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MakeTokenGetTokenGetRequest:
    query_params: MakeTokenGetTokenGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MakeTokenGetTokenGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    json_web_token: Optional[shared_jsonwebtoken.JSONWebToken] = dataclasses.field(default=None)
    
