import dataclasses
from typing import Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import jsonwebtoken as shared_jsonwebtoken


@dataclasses.dataclass
class MakeTokenGetTokenPostQueryParams:
    api_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MakeTokenGetTokenPostRequest:
    query_params: MakeTokenGetTokenPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class MakeTokenGetTokenPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    json_web_token: Optional[shared_jsonwebtoken.JSONWebToken] = dataclasses.field(default=None)
    
