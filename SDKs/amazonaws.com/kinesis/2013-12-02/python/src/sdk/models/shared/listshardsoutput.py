import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shard as shared_shard


@dataclass_json
@dataclasses.dataclass
class ListShardsOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    shards: Optional[list[shared_shard.Shard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Shards') }})
    
