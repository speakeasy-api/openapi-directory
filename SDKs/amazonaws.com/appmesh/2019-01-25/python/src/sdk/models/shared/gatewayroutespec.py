import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcgatewayroute as shared_grpcgatewayroute
from ..shared import httpgatewayroute as shared_httpgatewayroute


@dataclass_json
@dataclasses.dataclass
class GatewayRouteSpec:
    r"""GatewayRouteSpec
    An object that represents a gateway route specification. Specify one gateway route type.
    """
    
    grpc_route: Optional[shared_grpcgatewayroute.GrpcGatewayRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoute') }})
    http2_route: Optional[shared_httpgatewayroute.HTTPGatewayRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2Route') }})
    http_route: Optional[shared_httpgatewayroute.HTTPGatewayRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
