import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ratelimit as shared_ratelimit


@dataclass_json
@dataclasses.dataclass
class RateLimitsResponse:
    r"""RateLimitsResponse
    This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
    """
    
    rate_limits: Optional[list[shared_ratelimit.RateLimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimits') }})
    
