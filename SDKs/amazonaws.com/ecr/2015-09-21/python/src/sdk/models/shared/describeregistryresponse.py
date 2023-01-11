import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationconfiguration as shared_replicationconfiguration


@dataclass_json
@dataclasses.dataclass
class DescribeRegistryResponse:
    registry_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    replication_configuration: Optional[shared_replicationconfiguration.ReplicationConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfiguration') }})
    
