import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serverreplicationconfiguration as shared_serverreplicationconfiguration


@dataclass_json
@dataclasses.dataclass
class ServerGroupReplicationConfiguration:
    r"""ServerGroupReplicationConfiguration
    Replication configuration for a server group.
    """
    
    server_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_replication_configurations: Optional[list[shared_serverreplicationconfiguration.ServerReplicationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverReplicationConfigurations') }})
    
