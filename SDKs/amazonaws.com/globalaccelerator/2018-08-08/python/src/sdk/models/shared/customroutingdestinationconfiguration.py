import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingprotocol_enum as shared_customroutingprotocol_enum


@dataclass_json
@dataclasses.dataclass
class CustomRoutingDestinationConfiguration:
    r"""CustomRoutingDestinationConfiguration
    For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.
    """
    
    from_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    protocols: list[shared_customroutingprotocol_enum.CustomRoutingProtocolEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    to_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
