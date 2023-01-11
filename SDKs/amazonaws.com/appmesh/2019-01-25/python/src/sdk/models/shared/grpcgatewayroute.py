import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcgatewayrouteaction as shared_grpcgatewayrouteaction
from ..shared import grpcgatewayroutematch as shared_grpcgatewayroutematch


@dataclass_json
@dataclasses.dataclass
class GrpcGatewayRoute:
    r"""GrpcGatewayRoute
    An object that represents a gRPC gateway route.
    """
    
    action: shared_grpcgatewayrouteaction.GrpcGatewayRouteAction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    match: shared_grpcgatewayroutematch.GrpcGatewayRouteMatch = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
