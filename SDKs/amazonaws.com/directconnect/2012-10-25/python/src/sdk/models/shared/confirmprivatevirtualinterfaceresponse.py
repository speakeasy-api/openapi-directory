import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualinterfacestate_enum as shared_virtualinterfacestate_enum


@dataclass_json
@dataclasses.dataclass
class ConfirmPrivateVirtualInterfaceResponse:
    virtual_interface_state: Optional[shared_virtualinterfacestate_enum.VirtualInterfaceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceState') }})
    
