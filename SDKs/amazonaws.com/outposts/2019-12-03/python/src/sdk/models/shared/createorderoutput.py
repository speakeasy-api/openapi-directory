import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order as shared_order


@dataclass_json
@dataclasses.dataclass
class CreateOrderOutput:
    order: Optional[shared_order.Order] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order') }})
    
