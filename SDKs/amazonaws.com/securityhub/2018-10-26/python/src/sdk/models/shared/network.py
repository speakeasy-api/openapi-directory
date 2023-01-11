import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkdirection_enum as shared_networkdirection_enum
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class Network:
    r"""Network
    The details of network-related information about a finding.
    """
    
    destination_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDomain') }})
    destination_ip_v4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpV4') }})
    destination_ip_v6: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpV6') }})
    destination_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPort') }})
    direction: Optional[shared_networkdirection_enum.NetworkDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Direction') }})
    open_port_range: Optional[shared_portrange.PortRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenPortRange') }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDomain') }})
    source_ip_v4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpV4') }})
    source_ip_v6: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceIpV6') }})
    source_mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceMac') }})
    source_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePort') }})
    
