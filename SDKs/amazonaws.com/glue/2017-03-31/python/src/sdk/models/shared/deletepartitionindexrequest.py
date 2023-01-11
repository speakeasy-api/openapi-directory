import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeletePartitionIndexRequest:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    index_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
