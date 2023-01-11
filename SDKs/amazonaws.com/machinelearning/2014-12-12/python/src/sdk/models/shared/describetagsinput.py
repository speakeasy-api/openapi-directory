import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taggableresourcetype_enum as shared_taggableresourcetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeTagsInput:
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: shared_taggableresourcetype_enum.TaggableResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
