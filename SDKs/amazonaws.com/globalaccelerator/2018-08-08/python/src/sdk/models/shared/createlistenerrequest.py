import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientaffinity_enum as shared_clientaffinity_enum
from ..shared import portrange as shared_portrange
from ..shared import protocol_enum as shared_protocol_enum


@dataclass_json
@dataclasses.dataclass
class CreateListenerRequest:
    accelerator_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    port_ranges: list[shared_portrange.PortRange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: shared_protocol_enum.ProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    client_affinity: Optional[shared_clientaffinity_enum.ClientAffinityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    
