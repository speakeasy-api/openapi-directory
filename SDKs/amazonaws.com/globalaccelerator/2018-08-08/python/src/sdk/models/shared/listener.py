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
class Listener:
    r"""Listener
    A complex type for a listener.
    """
    
    client_affinity: Optional[shared_clientaffinity_enum.ClientAffinityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientAffinity') }})
    listener_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    port_ranges: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    protocol: Optional[shared_protocol_enum.ProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    
