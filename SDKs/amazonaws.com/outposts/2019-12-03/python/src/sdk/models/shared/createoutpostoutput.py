import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outpost as shared_outpost


@dataclass_json
@dataclasses.dataclass
class CreateOutpostOutput:
    outpost: Optional[shared_outpost.Outpost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outpost') }})
    
