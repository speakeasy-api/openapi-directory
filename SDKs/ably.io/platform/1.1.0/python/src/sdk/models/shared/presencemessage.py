import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extras as shared_extras

class PresenceMessageActionEnum(str, Enum):
    ABSENT = "ABSENT"
    PRESENT = "PRESENT"
    ENTER = "ENTER"
    LEAVE = "LEAVE"
    UPDATE = "UPDATE"


@dataclass_json
@dataclasses.dataclass
class PresenceMessage:
    action: Optional[PresenceMessageActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    extras: Optional[shared_extras.Extras] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
