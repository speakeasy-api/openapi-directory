import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class NetworkPathComponentDetails:
    r"""NetworkPathComponentDetails
    Information about the destination of the next component in the network path.
    """
    
    address: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    port_ranges: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
