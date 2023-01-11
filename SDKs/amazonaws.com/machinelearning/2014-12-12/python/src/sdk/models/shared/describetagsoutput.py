import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taggableresourcetype_enum as shared_taggableresourcetype_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class DescribeTagsOutput:
    r"""DescribeTagsOutput
    Amazon ML returns the following elements.
    """
    
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: Optional[shared_taggableresourcetype_enum.TaggableResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
