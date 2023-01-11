import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute_enum as shared_attribute_enum
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class DetectFacesRequest:
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    attributes: Optional[list[shared_attribute_enum.AttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    
