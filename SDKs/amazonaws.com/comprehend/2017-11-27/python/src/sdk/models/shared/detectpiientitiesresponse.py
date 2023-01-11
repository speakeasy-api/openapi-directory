import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import piientity as shared_piientity


@dataclass_json
@dataclasses.dataclass
class DetectPiiEntitiesResponse:
    entities: Optional[list[shared_piientity.PiiEntity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entities') }})
    
