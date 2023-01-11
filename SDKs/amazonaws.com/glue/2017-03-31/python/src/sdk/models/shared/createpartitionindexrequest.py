import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitionindex as shared_partitionindex


@dataclass_json
@dataclasses.dataclass
class CreatePartitionIndexRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_index: shared_partitionindex.PartitionIndex = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndex') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
