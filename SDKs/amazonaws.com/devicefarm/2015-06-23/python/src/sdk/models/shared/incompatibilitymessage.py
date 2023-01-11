import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceattribute_enum as shared_deviceattribute_enum


@dataclass_json
@dataclasses.dataclass
class IncompatibilityMessage:
    r"""IncompatibilityMessage
    Represents information about incompatibility.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[shared_deviceattribute_enum.DeviceAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
