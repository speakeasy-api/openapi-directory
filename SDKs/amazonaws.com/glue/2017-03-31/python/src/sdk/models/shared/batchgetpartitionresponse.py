import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partition as shared_partition
from ..shared import partitionvaluelist as shared_partitionvaluelist


@dataclass_json
@dataclasses.dataclass
class BatchGetPartitionResponse:
    partitions: Optional[list[shared_partition.Partition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Partitions') }})
    unprocessed_keys: Optional[list[shared_partitionvaluelist.PartitionValueList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedKeys') }})
    
