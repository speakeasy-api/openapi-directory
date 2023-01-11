import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageactiontype_enum as shared_imageactiontype_enum


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicyRuleAction:
    r"""LifecyclePolicyRuleAction
    The type of action to be taken.
    """
    
    type: Optional[shared_imageactiontype_enum.ImageActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
