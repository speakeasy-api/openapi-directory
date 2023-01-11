import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagetagdetail as shared_imagetagdetail


@dataclass_json
@dataclasses.dataclass
class DescribeImageTagsResponse:
    image_tag_details: Optional[list[shared_imagetagdetail.ImageTagDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagDetails') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
