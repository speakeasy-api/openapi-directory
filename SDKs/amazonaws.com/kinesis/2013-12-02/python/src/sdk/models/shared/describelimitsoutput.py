import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeLimitsOutput:
    open_shard_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenShardCount') }})
    shard_limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardLimit') }})
    
