import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetRecordsInput:
    r"""GetRecordsInput
    Represents the input for <a>GetRecords</a>.
    """
    
    shard_iterator: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardIterator') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
