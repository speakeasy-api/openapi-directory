import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefailure as shared_imagefailure
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class BatchGetImageResponse:
    failures: Optional[list[shared_imagefailure.ImageFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    
