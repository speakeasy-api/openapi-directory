import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutedata as shared_gatewayroutedata


@dataclass_json
@dataclasses.dataclass
class CreateGatewayRouteOutput:
    gateway_route: shared_gatewayroutedata.GatewayRouteData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayRoute') }})
    
