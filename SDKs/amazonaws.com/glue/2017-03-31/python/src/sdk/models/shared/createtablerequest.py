import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitionindex as shared_partitionindex
from ..shared import tableinput as shared_tableinput


@dataclass_json
@dataclasses.dataclass
class CreateTableRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    table_input: shared_tableinput.TableInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableInput') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    partition_indexes: Optional[list[shared_partitionindex.PartitionIndex]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionIndexes') }})
    
