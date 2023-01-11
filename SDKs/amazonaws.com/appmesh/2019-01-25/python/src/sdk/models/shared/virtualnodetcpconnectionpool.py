import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualNodeTCPConnectionPool:
    r"""VirtualNodeTCPConnectionPool
    An object that represents a type of connection pool.
    """
    
    max_connections: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConnections') }})
    
