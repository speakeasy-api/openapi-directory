import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagstatus_enum as shared_tagstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListImagesFilter:
    r"""ListImagesFilter
    An object representing a filter on a <a>ListImages</a> operation.
    """
    
    tag_status: Optional[shared_tagstatus_enum.TagStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagStatus') }})
    
