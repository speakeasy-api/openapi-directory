import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseinput as shared_databaseinput


@dataclass_json
@dataclasses.dataclass
class CreateDatabaseRequest:
    database_input: shared_databaseinput.DatabaseInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInput') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
