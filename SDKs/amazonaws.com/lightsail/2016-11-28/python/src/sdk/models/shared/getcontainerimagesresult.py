import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerimage as shared_containerimage


@dataclass_json
@dataclasses.dataclass
class GetContainerImagesResult:
    container_images: Optional[list[shared_containerimage.ContainerImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImages') }})
    
