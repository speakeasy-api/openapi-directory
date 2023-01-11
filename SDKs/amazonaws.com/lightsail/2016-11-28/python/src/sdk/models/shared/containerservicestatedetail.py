import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicestatedetailcode_enum as shared_containerservicestatedetailcode_enum


@dataclass_json
@dataclasses.dataclass
class ContainerServiceStateDetail:
    r"""ContainerServiceStateDetail
    Describes the current state of a container service.
    """
    
    code: Optional[shared_containerservicestatedetailcode_enum.ContainerServiceStateDetailCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
