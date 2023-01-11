import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsapicallaction as shared_awsapicallaction
from ..shared import dnsrequestaction as shared_dnsrequestaction
from ..shared import networkconnectionaction as shared_networkconnectionaction
from ..shared import portprobeaction as shared_portprobeaction


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
    """
    
    action_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionType') }})
    aws_api_call_action: Optional[shared_awsapicallaction.AwsAPICallAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsApiCallAction') }})
    dns_request_action: Optional[shared_dnsrequestaction.DNSRequestAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsRequestAction') }})
    network_connection_action: Optional[shared_networkconnectionaction.NetworkConnectionAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConnectionAction') }})
    port_probe_action: Optional[shared_portprobeaction.PortProbeAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortProbeAction') }})
    
