import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portrange as shared_portrange
from ..shared import address as shared_address
from ..shared import tcpflagfield as shared_tcpflagfield


@dataclass_json
@dataclasses.dataclass
class MatchAttributes:
    r"""MatchAttributes
    Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags. 
    """
    
    destination_ports: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPorts') }})
    destinations: Optional[list[shared_address.Address]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destinations') }})
    protocols: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    source_ports: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourcePorts') }})
    sources: Optional[list[shared_address.Address]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sources') }})
    tcp_flags: Optional[list[shared_tcpflagfield.TCPFlagField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TCPFlags') }})
    
