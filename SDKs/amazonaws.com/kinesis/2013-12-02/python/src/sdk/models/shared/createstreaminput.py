import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateStreamInput:
    r"""CreateStreamInput
    Represents the input for <code>CreateStream</code>.
    """
    
    shard_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardCount') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
