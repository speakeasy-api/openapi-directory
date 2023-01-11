import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagebuilderstatechangereasoncode_enum as shared_imagebuilderstatechangereasoncode_enum


@dataclass_json
@dataclasses.dataclass
class ImageBuilderStateChangeReason:
    r"""ImageBuilderStateChangeReason
    Describes the reason why the last image builder state change occurred.
    """
    
    code: Optional[shared_imagebuilderstatechangereasoncode_enum.ImageBuilderStateChangeReasonCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
