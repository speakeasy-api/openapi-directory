import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationset as shared_replicationset


@dataclass_json
@dataclasses.dataclass
class GetReplicationSetOutput:
    replication_set: shared_replicationset.ReplicationSet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationSet') }})
    
