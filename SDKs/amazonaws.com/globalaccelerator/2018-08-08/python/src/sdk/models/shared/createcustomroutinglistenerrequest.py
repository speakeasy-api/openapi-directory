import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class CreateCustomRoutingListenerRequest:
    accelerator_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    port_ranges: list[shared_portrange.PortRange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
