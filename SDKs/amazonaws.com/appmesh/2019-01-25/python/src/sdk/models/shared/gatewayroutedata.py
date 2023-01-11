import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import gatewayroutespec as shared_gatewayroutespec
from ..shared import gatewayroutestatus as shared_gatewayroutestatus


@dataclass_json
@dataclasses.dataclass
class GatewayRouteData:
    r"""GatewayRouteData
    An object that represents a gateway route returned by a describe operation.
    """
    
    gateway_route_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayRouteName') }})
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_gatewayroutespec.GatewayRouteSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_gatewayroutestatus.GatewayRouteStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayName') }})
    
