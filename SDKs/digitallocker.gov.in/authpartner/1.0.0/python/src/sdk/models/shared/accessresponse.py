import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessResponseEaadharEnum(str, Enum):
    Y = "Y"
    N = "N"

class AccessResponseGenderEnum(str, Enum):
    M = "M"
    F = "F"
    T = "T"


@dataclass_json
@dataclasses.dataclass
class AccessResponse:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    digilocker_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digilocker_id') }})
    dob: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dob') }})
    eaadhar: AccessResponseEaadharEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eaadhar') }})
    expires_in: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    gender: AccessResponseGenderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reference_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_key') }})
    refresh_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    scope: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    token_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    
