import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apirequest as shared_apirequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetAPIActivityQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIActivitySecurity:
    connect_token: shared_security.SchemeConnectToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAPIActivityRequest:
    query_params: GetAPIActivityQueryParams = dataclasses.field()
    security: GetAPIActivitySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIActivityResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    api_requests: Optional[list[shared_apirequest.APIRequest]] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
