import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partition as shared_partition


@dataclass_json
@dataclasses.dataclass
class GetPartitionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    partitions: Optional[list[shared_partition.Partition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Partitions') }})
    
