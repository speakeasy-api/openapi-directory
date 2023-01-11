import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayrouteref as shared_gatewayrouteref


@dataclass_json
@dataclasses.dataclass
class ListGatewayRoutesOutput:
    gateway_routes: list[shared_gatewayrouteref.GatewayRouteRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayRoutes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
