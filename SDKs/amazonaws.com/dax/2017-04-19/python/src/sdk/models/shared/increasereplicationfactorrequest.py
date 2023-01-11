import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IncreaseReplicationFactorRequest:
    cluster_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterName') }})
    new_replication_factor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewReplicationFactor') }})
    availability_zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    
