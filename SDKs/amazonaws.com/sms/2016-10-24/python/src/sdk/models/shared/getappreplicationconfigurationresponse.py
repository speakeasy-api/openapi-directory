import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servergroupreplicationconfiguration as shared_servergroupreplicationconfiguration


@dataclass_json
@dataclasses.dataclass
class GetAppReplicationConfigurationResponse:
    server_group_replication_configurations: Optional[list[shared_servergroupreplicationconfiguration.ServerGroupReplicationConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupReplicationConfigurations') }})
    
