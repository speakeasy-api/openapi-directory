import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackedorder as shared_trackedorder


@dataclass_json
@dataclasses.dataclass
class TrackedOrders:
    orders: list[shared_trackedorder.TrackedOrder] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    
