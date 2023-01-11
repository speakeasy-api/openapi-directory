import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeStreamInput:
    r"""DescribeStreamInput
    Represents the input for <code>DescribeStream</code>.
    """
    
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    exclusive_start_shard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartShardId') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
