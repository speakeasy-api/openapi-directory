import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupEmbargoOptionsTypeEnum(str, Enum):
    LOGGED_IN = "logged_in"
    IP_RANGE = "ip_range"
    ADMINISTRATOR = "administrator"


@dataclass_json
@dataclasses.dataclass
class GroupEmbargoOptions:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_name') }})
    type: Optional[GroupEmbargoOptionsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
