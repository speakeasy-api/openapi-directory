import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagebuilder as shared_imagebuilder


@dataclass_json
@dataclasses.dataclass
class CreateImageBuilderResult:
    image_builder: Optional[shared_imagebuilder.ImageBuilder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageBuilder') }})
    
