import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SplitShardInput:
    r"""SplitShardInput
    Represents the input for <code>SplitShard</code>.
    """
    
    new_starting_hash_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewStartingHashKey') }})
    shard_to_split: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardToSplit') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
