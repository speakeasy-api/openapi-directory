import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionstate_enum as shared_connectionstate_enum


@dataclass_json
@dataclasses.dataclass
class ConfirmConnectionResponse:
    connection_state: Optional[shared_connectionstate_enum.ConnectionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionState') }})
    
