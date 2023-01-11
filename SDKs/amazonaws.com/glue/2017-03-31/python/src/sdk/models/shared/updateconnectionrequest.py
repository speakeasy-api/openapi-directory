import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectioninput as shared_connectioninput


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionRequest:
    connection_input: shared_connectioninput.ConnectionInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionInput') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
