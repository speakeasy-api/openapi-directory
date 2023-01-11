import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkprotocol_enum as shared_networkprotocol_enum


@dataclass_json
@dataclasses.dataclass
class PortInfo:
    r"""PortInfo
    Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
    """
    
    cidr_list_aliases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrListAliases') }})
    cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromPort') }})
    ipv6_cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Cidrs') }})
    protocol: Optional[shared_networkprotocol_enum.NetworkProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toPort') }})
    
