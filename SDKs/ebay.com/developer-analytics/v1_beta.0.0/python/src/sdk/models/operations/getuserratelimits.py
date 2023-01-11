import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import ratelimitsresponse as shared_ratelimitsresponse


@dataclasses.dataclass
class GetUserRateLimitsQueryParams:
    api_context: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_context', 'style': 'form', 'explode': True }})
    api_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserRateLimitsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserRateLimits500ApplicationJSON:
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetUserRateLimitsRequest:
    query_params: GetUserRateLimitsQueryParams = dataclasses.field()
    security: GetUserRateLimitsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserRateLimitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rate_limits_response: Optional[shared_ratelimitsresponse.RateLimitsResponse] = dataclasses.field(default=None)
    get_user_rate_limits_500_application_json_object: Optional[GetUserRateLimits500ApplicationJSON] = dataclasses.field(default=None)
    
