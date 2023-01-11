import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackedexternalorder as shared_trackedexternalorder


@dataclass_json
@dataclasses.dataclass
class TrackedExternalOrders:
    external_orders: list[shared_trackedexternalorder.TrackedExternalOrder] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalOrders') }})
    
