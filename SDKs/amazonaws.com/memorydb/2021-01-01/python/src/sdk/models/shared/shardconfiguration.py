import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ShardConfiguration:
    r"""ShardConfiguration
    Shard configuration options. Each shard configuration has the following: Slots and ReplicaCount.
    """
    
    replica_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaCount') }})
    slots: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Slots') }})
    
