import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import server as shared_server
from ..shared import serverreplicationparameters as shared_serverreplicationparameters


@dataclass_json
@dataclasses.dataclass
class ServerReplicationConfiguration:
    r"""ServerReplicationConfiguration
    Replication configuration of a server.
    """
    
    server: Optional[shared_server.Server] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    server_replication_parameters: Optional[shared_serverreplicationparameters.ServerReplicationParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverReplicationParameters') }})
    
