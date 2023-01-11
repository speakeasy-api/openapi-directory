import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationconfiguration as shared_replicationconfiguration


@dataclass_json
@dataclasses.dataclass
class PutReplicationConfigurationRequest:
    replication_configuration: shared_replicationconfiguration.ReplicationConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfiguration') }})
    
