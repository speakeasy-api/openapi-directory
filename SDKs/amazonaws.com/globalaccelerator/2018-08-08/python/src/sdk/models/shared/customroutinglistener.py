import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portrange as shared_portrange


@dataclass_json
@dataclasses.dataclass
class CustomRoutingListener:
    r"""CustomRoutingListener
    A complex type for a listener for a custom routing accelerator.
    """
    
    listener_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    port_ranges: Optional[list[shared_portrange.PortRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRanges') }})
    
