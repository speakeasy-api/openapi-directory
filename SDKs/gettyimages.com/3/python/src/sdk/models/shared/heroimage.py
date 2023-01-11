import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import heroimagedisplaysize as shared_heroimagedisplaysize


@dataclass_json
@dataclasses.dataclass
class HeroImage:
    display_sizes: Optional[list[shared_heroimagedisplaysize.HeroImageDisplaySize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_sizes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
