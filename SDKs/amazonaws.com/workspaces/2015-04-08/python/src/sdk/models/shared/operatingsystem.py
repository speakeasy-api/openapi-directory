import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatingsystemtype_enum as shared_operatingsystemtype_enum


@dataclass_json
@dataclasses.dataclass
class OperatingSystem:
    r"""OperatingSystem
    The operating system that the image is running.
    """
    
    type: Optional[shared_operatingsystemtype_enum.OperatingSystemTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
