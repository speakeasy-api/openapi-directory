import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagestatus_enum as shared_imagestatus_enum


@dataclass_json
@dataclasses.dataclass
class ImageState:
    r"""ImageState
     Image state shows the image status and the reason for that status.
    """
    
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[shared_imagestatus_enum.ImageStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
