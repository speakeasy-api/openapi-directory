import dataclasses
from typing import Optional
from ..shared import endpointlist as shared_endpointlist
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import subuserjsonwebtoken as shared_subuserjsonwebtoken


@dataclasses.dataclass
class MakeSubUserKeyMakeSubUserKeyPostQueryParams:
    api_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    site_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'siteName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MakeSubUserKeyMakeSubUserKeyPostRequest:
    query_params: MakeSubUserKeyMakeSubUserKeyPostQueryParams = dataclasses.field()
    request: shared_endpointlist.EndpointList = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MakeSubUserKeyMakeSubUserKeyPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    sub_user_json_web_token: Optional[shared_subuserjsonwebtoken.SubUserJSONWebToken] = dataclasses.field(default=None)
    
