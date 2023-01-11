import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import control as shared_control


@dataclass_json
@dataclasses.dataclass
class GetControlResponse:
    control: Optional[shared_control.Control] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    
