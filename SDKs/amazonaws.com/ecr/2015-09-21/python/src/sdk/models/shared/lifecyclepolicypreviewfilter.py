import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagstatus_enum as shared_tagstatus_enum


@dataclass_json
@dataclasses.dataclass
class LifecyclePolicyPreviewFilter:
    r"""LifecyclePolicyPreviewFilter
    The filter for the lifecycle policy preview.
    """
    
    tag_status: Optional[shared_tagstatus_enum.TagStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagStatus') }})
    
