import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emergencycontact as shared_emergencycontact


@dataclass_json
@dataclasses.dataclass
class AssociateProactiveEngagementDetailsRequest:
    emergency_contact_list: list[shared_emergencycontact.EmergencyContact] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmergencyContactList') }})
    
