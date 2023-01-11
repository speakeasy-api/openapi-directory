import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayGrpcConnectionPool:
    r"""VirtualGatewayGrpcConnectionPool
    An object that represents a type of connection pool.
    """
    
    max_requests: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRequests') }})
    
