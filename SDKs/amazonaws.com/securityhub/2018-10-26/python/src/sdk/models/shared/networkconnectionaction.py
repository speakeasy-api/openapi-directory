import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionlocalportdetails as shared_actionlocalportdetails
from ..shared import actionremoteipdetails as shared_actionremoteipdetails
from ..shared import actionremoteportdetails as shared_actionremoteportdetails


@dataclass_json
@dataclasses.dataclass
class NetworkConnectionAction:
    r"""NetworkConnectionAction
    Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
    """
    
    blocked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Blocked') }})
    connection_direction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionDirection') }})
    local_port_details: Optional[shared_actionlocalportdetails.ActionLocalPortDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalPortDetails') }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    remote_ip_details: Optional[shared_actionremoteipdetails.ActionRemoteIPDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteIpDetails') }})
    remote_port_details: Optional[shared_actionremoteportdetails.ActionRemotePortDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemotePortDetails') }})
    
