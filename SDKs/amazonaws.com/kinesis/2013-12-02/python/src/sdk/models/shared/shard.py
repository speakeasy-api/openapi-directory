import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hashkeyrange as shared_hashkeyrange
from ..shared import sequencenumberrange as shared_sequencenumberrange


@dataclass_json
@dataclasses.dataclass
class Shard:
    r"""Shard
    A uniquely identified group of data records in a Kinesis data stream.
    """
    
    hash_key_range: shared_hashkeyrange.HashKeyRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyRange') }})
    sequence_number_range: shared_sequencenumberrange.SequenceNumberRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumberRange') }})
    shard_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    adjacent_parent_shard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjacentParentShardId') }})
    parent_shard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentShardId') }})
    
