import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meshstatuscode_enum as shared_meshstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class MeshStatus:
    r"""MeshStatus
    An object representing the status of a service mesh.
    """
    
    status: Optional[shared_meshstatuscode_enum.MeshStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
