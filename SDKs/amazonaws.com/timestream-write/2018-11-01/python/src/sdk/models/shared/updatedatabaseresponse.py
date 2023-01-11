import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import database as shared_database


@dataclass_json
@dataclasses.dataclass
class UpdateDatabaseResponse:
    database: Optional[shared_database.Database] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    
