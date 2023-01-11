import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class NeighborConnectionDetail:
    r"""NeighborConnectionDetail
    Details about neighboring servers.
    """
    
    connections_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionsCount') }})
    destination_server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationServerId') }})
    source_server_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerId') }})
    destination_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPort') }})
    transport_protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportProtocol') }})
    
