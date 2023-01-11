import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import childshard as shared_childshard
from ..shared import record as shared_record


@dataclass_json
@dataclasses.dataclass
class GetRecordsOutput:
    r"""GetRecordsOutput
    Represents the output for <a>GetRecords</a>.
    """
    
    records: list[shared_record.Record] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    child_shards: Optional[list[shared_childshard.ChildShard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChildShards') }})
    millis_behind_latest: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MillisBehindLatest') }})
    next_shard_iterator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextShardIterator') }})
    
