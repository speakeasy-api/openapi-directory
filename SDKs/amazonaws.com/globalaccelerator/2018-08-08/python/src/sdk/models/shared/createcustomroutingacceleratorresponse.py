import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingaccelerator as shared_customroutingaccelerator


@dataclass_json
@dataclasses.dataclass
class CreateCustomRoutingAcceleratorResponse:
    accelerator: Optional[shared_customroutingaccelerator.CustomRoutingAccelerator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accelerator') }})
    
