import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accelerator as shared_accelerator


@dataclass_json
@dataclasses.dataclass
class CreateAcceleratorResponse:
    accelerator: Optional[shared_accelerator.Accelerator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accelerator') }})
    
