import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayHTTPConnectionPool:
    r"""VirtualGatewayHTTPConnectionPool
    An object that represents a type of connection pool.
    """
    
    max_connections: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConnections') }})
    max_pending_requests: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPendingRequests') }})
    
