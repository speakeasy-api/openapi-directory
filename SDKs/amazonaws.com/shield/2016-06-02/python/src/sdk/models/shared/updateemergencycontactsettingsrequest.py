import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emergencycontact as shared_emergencycontact


@dataclass_json
@dataclasses.dataclass
class UpdateEmergencyContactSettingsRequest:
    emergency_contact_list: Optional[list[shared_emergencycontact.EmergencyContact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmergencyContactList') }})
    
