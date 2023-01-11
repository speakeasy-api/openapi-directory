import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReminderProfileReminderTemplateTypeEnum(str, Enum):
    EMAIL = "email"
    SMS = "sms"
    PHONE = "phone"
    AUTO_CALL = "auto_call"

class ReminderProfileReminderTemplateUnitEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"
    WEEKS = "weeks"


@dataclass_json
@dataclasses.dataclass
class ReminderProfileReminderTemplate:
    r"""ReminderProfileReminderTemplate
    Array of reminders
    """
    
    amount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    type: Optional[ReminderProfileReminderTemplateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit: Optional[ReminderProfileReminderTemplateUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class ReminderProfile:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    reminders: list[ReminderProfileReminderTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminders') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
