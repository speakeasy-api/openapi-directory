import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterstatuscode_enum as shared_virtualrouterstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class VirtualRouterStatus:
    r"""VirtualRouterStatus
    An object representing the status of a virtual router. 
    """
    
    status: Optional[shared_virtualrouterstatuscode_enum.VirtualRouterStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
