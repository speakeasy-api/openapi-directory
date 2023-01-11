import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocol_enum as shared_protocol_enum


@dataclass_json
@dataclasses.dataclass
class CustomRoutingDestinationDescription:
    r"""CustomRoutingDestinationDescription
    For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
    """
    
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    protocols: Optional[list[shared_protocol_enum.ProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
