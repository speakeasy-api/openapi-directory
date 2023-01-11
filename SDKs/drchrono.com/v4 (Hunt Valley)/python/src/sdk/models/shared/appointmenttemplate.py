import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AppointmentTemplateOpenSlot:
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class AppointmentTemplate:
    r"""AppointmentTemplate
    Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
    """
    
    exam_room: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exam_room') }})
    office: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    profile: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    scheduled_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_time') }})
    week_days: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('week_days') }})
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    date_end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_end') }})
    date_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_start') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    open_slots: Optional[list[AppointmentTemplateOpenSlot]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_slots') }})
    
