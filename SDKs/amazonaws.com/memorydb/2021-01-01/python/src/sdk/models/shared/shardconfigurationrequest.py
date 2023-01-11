import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ShardConfigurationRequest:
    r"""ShardConfigurationRequest
    A request to configure the sharding properties of a cluster
    """
    
    shard_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardCount') }})
    
