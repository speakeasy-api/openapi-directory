import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MergeShardsInput:
    r"""MergeShardsInput
    Represents the input for <code>MergeShards</code>.
    """
    
    adjacent_shard_to_merge: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjacentShardToMerge') }})
    shard_to_merge: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardToMerge') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
