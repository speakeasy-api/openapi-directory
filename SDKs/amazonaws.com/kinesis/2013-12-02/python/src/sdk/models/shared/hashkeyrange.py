import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HashKeyRange:
    r"""HashKeyRange
    The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
    """
    
    ending_hash_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndingHashKey') }})
    starting_hash_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingHashKey') }})
    
