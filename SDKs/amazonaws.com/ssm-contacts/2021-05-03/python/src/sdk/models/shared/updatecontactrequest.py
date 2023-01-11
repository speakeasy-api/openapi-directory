import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import plan as shared_plan


@dataclass_json
@dataclasses.dataclass
class UpdateContactRequest:
    contact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    plan: Optional[shared_plan.Plan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plan') }})
    
