import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httprouteaction as shared_httprouteaction
from ..shared import httproutematch as shared_httproutematch


@dataclass_json
@dataclasses.dataclass
class HTTPRoute:
    r"""HTTPRoute
    An object representing the HTTP routing specification for a route.
    """
    
    action: Optional[shared_httprouteaction.HTTPRouteAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: Optional[shared_httproutematch.HTTPRouteMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
