import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hsm as shared_hsm


@dataclass_json
@dataclasses.dataclass
class CreateHsmResponse:
    hsm: Optional[shared_hsm.Hsm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hsm') }})
    
