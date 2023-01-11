import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroute as shared_grpcroute
from ..shared import httproute as shared_httproute
from ..shared import tcproute as shared_tcproute


@dataclass_json
@dataclasses.dataclass
class RouteSpec:
    r"""RouteSpec
    An object that represents a route specification. Specify one route type.
    """
    
    grpc_route: Optional[shared_grpcroute.GrpcRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoute') }})
    http2_route: Optional[shared_httproute.HTTPRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2Route') }})
    http_route: Optional[shared_httproute.HTTPRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    tcp_route: Optional[shared_tcproute.TCPRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRoute') }})
    
