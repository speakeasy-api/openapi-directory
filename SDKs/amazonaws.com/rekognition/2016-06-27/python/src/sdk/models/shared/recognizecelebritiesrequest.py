import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class RecognizeCelebritiesRequest:
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    
