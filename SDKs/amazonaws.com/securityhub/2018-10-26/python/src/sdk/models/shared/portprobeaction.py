import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import portprobedetail as shared_portprobedetail


@dataclass_json
@dataclasses.dataclass
class PortProbeAction:
    r"""PortProbeAction
    Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
    """
    
    blocked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocked') }})
    port_probe_details: Optional[list[shared_portprobedetail.PortProbeDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortProbeDetails') }})
    
