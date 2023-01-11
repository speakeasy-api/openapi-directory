import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodestatuscode_enum as shared_virtualnodestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class VirtualNodeStatus:
    r"""VirtualNodeStatus
    An object that represents the current status of the virtual node.
    """
    
    status: shared_virtualnodestatuscode_enum.VirtualNodeStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
