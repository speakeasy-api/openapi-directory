import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseinput as shared_databaseinput


@dataclass_json
@dataclasses.dataclass
class UpdateDatabaseRequest:
    database_input: shared_databaseinput.DatabaseInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseInput') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
