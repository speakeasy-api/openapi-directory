import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouteaction as shared_httprouteaction
from ..shared import httproutematch as shared_httproutematch
from ..shared import httpretrypolicy as shared_httpretrypolicy
from ..shared import httptimeout as shared_httptimeout


@dataclass_json
@dataclasses.dataclass
class HTTPRoute:
    r"""HTTPRoute
    An object that represents an HTTP or HTTP/2 route type.
    """
    
    action: shared_httprouteaction.HTTPRouteAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: shared_httproutematch.HTTPRouteMatch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    retry_policy: Optional[shared_httpretrypolicy.HTTPRetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[shared_httptimeout.HTTPTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
