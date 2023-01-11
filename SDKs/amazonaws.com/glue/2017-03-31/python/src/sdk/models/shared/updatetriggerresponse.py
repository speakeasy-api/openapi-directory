import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trigger as shared_trigger


@dataclass_json
@dataclasses.dataclass
class UpdateTriggerResponse:
    trigger: Optional[shared_trigger.Trigger] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trigger') }})
    
