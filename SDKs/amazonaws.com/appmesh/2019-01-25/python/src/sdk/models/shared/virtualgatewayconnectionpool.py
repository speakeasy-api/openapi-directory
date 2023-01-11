import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaygrpcconnectionpool as shared_virtualgatewaygrpcconnectionpool
from ..shared import virtualgatewayhttpconnectionpool as shared_virtualgatewayhttpconnectionpool
from ..shared import virtualgatewayhttp2connectionpool as shared_virtualgatewayhttp2connectionpool


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayConnectionPool:
    r"""VirtualGatewayConnectionPool
    <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>
    """
    
    grpc: Optional[shared_virtualgatewaygrpcconnectionpool.VirtualGatewayGrpcConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http: Optional[shared_virtualgatewayhttpconnectionpool.VirtualGatewayHTTPConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    http2: Optional[shared_virtualgatewayhttp2connectionpool.VirtualGatewayHttp2ConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2') }})
    
