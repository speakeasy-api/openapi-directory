import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageentity as shared_imageentity


@dataclass_json
@dataclasses.dataclass
class StyleEntity:
    r"""StyleEntity
    Show Style
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo: Optional[shared_imageentity.ImageEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    thumbnail: Optional[shared_imageentity.ImageEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
