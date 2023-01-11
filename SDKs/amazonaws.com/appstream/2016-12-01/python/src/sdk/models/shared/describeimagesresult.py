import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class DescribeImagesResult:
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Images') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
