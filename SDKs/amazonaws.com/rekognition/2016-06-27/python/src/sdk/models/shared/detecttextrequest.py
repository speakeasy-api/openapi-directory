import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detecttextfilters as shared_detecttextfilters
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class DetectTextRequest:
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    filters: Optional[shared_detecttextfilters.DetectTextFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    
