import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpgatewayrouteaction as shared_httpgatewayrouteaction
from ..shared import httpgatewayroutematch as shared_httpgatewayroutematch


@dataclass_json
@dataclasses.dataclass
class HTTPGatewayRoute:
    r"""HTTPGatewayRoute
    An object that represents an HTTP gateway route.
    """
    
    action: shared_httpgatewayrouteaction.HTTPGatewayRouteAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: shared_httpgatewayroutematch.HTTPGatewayRouteMatch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
