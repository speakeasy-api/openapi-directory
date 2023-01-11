import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionlocalipdetails as shared_actionlocalipdetails
from ..shared import actionlocalportdetails as shared_actionlocalportdetails
from ..shared import actionremoteipdetails as shared_actionremoteipdetails


@dataclass_json
@dataclasses.dataclass
class PortProbeDetail:
    r"""PortProbeDetail
    A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
    """
    
    local_ip_details: Optional[shared_actionlocalipdetails.ActionLocalIPDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalIpDetails') }})
    local_port_details: Optional[shared_actionlocalportdetails.ActionLocalPortDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPortDetails') }})
    remote_ip_details: Optional[shared_actionremoteipdetails.ActionRemoteIPDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteIpDetails') }})
    
