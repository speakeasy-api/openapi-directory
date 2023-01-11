import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitionvaluelist as shared_partitionvaluelist


@dataclass_json
@dataclasses.dataclass
class BatchGetPartitionRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partitions_to_get: list[shared_partitionvaluelist.PartitionValueList] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionsToGet') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
