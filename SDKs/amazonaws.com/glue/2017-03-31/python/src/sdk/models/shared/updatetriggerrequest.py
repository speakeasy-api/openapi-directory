import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import triggerupdate as shared_triggerupdate


@dataclass_json
@dataclasses.dataclass
class UpdateTriggerRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    trigger_update: shared_triggerupdate.TriggerUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerUpdate') }})
    
