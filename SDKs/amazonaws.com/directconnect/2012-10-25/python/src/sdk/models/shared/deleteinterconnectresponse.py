import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interconnectstate_enum as shared_interconnectstate_enum


@dataclass_json
@dataclasses.dataclass
class DeleteInterconnectResponse:
    interconnect_state: Optional[shared_interconnectstate_enum.InterconnectStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectState') }})
    
