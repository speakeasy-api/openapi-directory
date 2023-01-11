import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagestatechangereasoncode_enum as shared_imagestatechangereasoncode_enum


@dataclass_json
@dataclasses.dataclass
class ImageStateChangeReason:
    r"""ImageStateChangeReason
    Describes the reason why the last image state change occurred.
    """
    
    code: Optional[shared_imagestatechangereasoncode_enum.ImageStateChangeReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
