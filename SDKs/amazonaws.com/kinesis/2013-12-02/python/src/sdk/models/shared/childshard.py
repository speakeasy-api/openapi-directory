import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hashkeyrange as shared_hashkeyrange


@dataclass_json
@dataclasses.dataclass
class ChildShard:
    hash_key_range: shared_hashkeyrange.HashKeyRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyRange') }})
    parent_shards: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentShards') }})
    shard_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    
