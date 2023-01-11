import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location
from ..shared import principal as shared_principal

class SchoolHighGradeEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    TEN = "10"
    ELEVEN = "11"
    TWELVE = "12"
    PRE_KINDERGARTEN = "PreKindergarten"
    KINDERGARTEN = "Kindergarten"
    POST_GRADUATE = "PostGraduate"
    OTHER = "Other"

class SchoolLowGradeEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    TEN = "10"
    ELEVEN = "11"
    TWELVE = "12"
    PRE_KINDERGARTEN = "PreKindergarten"
    KINDERGARTEN = "Kindergarten"
    POST_GRADUATE = "PostGraduate"
    OTHER = "Other"


@dataclass_json
@dataclasses.dataclass
class School:
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    district: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    high_grade: Optional[SchoolHighGradeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_grade') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    low_grade: Optional[SchoolLowGradeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_grade') }})
    mdr_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mdr_number') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nces_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nces_id') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    principal: Optional[shared_principal.Principal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    school_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school_number') }})
    sis_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sis_id') }})
    state_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_id') }})
    
