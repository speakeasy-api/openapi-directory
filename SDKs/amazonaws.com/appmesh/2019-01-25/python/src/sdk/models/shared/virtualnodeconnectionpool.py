import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodegrpcconnectionpool as shared_virtualnodegrpcconnectionpool
from ..shared import virtualnodehttpconnectionpool as shared_virtualnodehttpconnectionpool
from ..shared import virtualnodehttp2connectionpool as shared_virtualnodehttp2connectionpool
from ..shared import virtualnodetcpconnectionpool as shared_virtualnodetcpconnectionpool


@dataclass_json
@dataclasses.dataclass
class VirtualNodeConnectionPool:
    r"""VirtualNodeConnectionPool
    <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
    """
    
    grpc: Optional[shared_virtualnodegrpcconnectionpool.VirtualNodeGrpcConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpc') }})
    http: Optional[shared_virtualnodehttpconnectionpool.VirtualNodeHTTPConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    http2: Optional[shared_virtualnodehttp2connectionpool.VirtualNodeHttp2ConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2') }})
    tcp: Optional[shared_virtualnodetcpconnectionpool.VirtualNodeTCPConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcp') }})
    
