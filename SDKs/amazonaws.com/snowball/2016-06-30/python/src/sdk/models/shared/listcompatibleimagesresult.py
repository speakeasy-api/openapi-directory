import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compatibleimage as shared_compatibleimage


@dataclass_json
@dataclasses.dataclass
class ListCompatibleImagesResult:
    compatible_images: Optional[list[shared_compatibleimage.CompatibleImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompatibleImages') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
