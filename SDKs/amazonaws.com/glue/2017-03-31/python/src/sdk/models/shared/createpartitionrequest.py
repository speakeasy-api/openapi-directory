import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partitioninput as shared_partitioninput


@dataclass_json
@dataclasses.dataclass
class CreatePartitionRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    partition_input: shared_partitioninput.PartitionInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionInput') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
