import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import choicereason_enum as shared_choicereason_enum
from ..shared import choicestatus_enum as shared_choicestatus_enum


@dataclass_json
@dataclasses.dataclass
class ChoiceUpdate:
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    reason: Optional[shared_choicereason_enum.ChoiceReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    status: Optional[shared_choicestatus_enum.ChoiceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
