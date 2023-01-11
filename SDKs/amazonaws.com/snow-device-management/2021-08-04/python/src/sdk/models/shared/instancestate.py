import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancestatename_enum as shared_instancestatename_enum


@dataclass_json
@dataclasses.dataclass
class InstanceState:
    r"""InstanceState
    The description of the current state of an instance.
    """
    
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[shared_instancestatename_enum.InstanceStateNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
