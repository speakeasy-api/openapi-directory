import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryfiltercriteria as shared_inventoryfiltercriteria


@dataclass_json
@dataclasses.dataclass
class CreateInventoryTaskRequest:
    feed_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    filter_criteria: Optional[shared_inventoryfiltercriteria.InventoryFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    inventory_file_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryFileTemplate') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    
