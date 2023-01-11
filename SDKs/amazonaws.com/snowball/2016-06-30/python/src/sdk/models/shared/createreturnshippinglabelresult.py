import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shippinglabelstatus_enum as shared_shippinglabelstatus_enum


@dataclass_json
@dataclasses.dataclass
class CreateReturnShippingLabelResult:
    status: Optional[shared_shippinglabelstatus_enum.ShippingLabelStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
