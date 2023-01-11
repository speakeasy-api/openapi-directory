import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodestatuscode_enum as shared_virtualnodestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class VirtualNodeStatus:
    r"""VirtualNodeStatus
    An object representing the current status of the virtual node.
    """
    
    status: Optional[shared_virtualnodestatuscode_enum.VirtualNodeStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
