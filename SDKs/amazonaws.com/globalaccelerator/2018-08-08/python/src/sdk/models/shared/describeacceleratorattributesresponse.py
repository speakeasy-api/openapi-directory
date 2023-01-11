import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceleratorattributes as shared_acceleratorattributes


@dataclass_json
@dataclasses.dataclass
class DescribeAcceleratorAttributesResponse:
    accelerator_attributes: Optional[shared_acceleratorattributes.AcceleratorAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorAttributes') }})
    
