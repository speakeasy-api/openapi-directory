import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tabledescription as shared_tabledescription


@dataclass_json
@dataclasses.dataclass
class UpdateTableOutput:
    table_description: Optional[shared_tabledescription.TableDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableDescription') }})
    
