import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shippingoption_enum as shared_shippingoption_enum


@dataclass_json
@dataclasses.dataclass
class CreateReturnShippingLabelRequest:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    shipping_option: Optional[shared_shippingoption_enum.ShippingOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
