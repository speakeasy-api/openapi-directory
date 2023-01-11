import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagefiletype_enum as shared_imagefiletype_enum


@dataclass_json
@dataclasses.dataclass
class ImageFile:
    r"""ImageFile
    Contains an image file.
    """
    
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    type: shared_imagefiletype_enum.ImageFileTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
