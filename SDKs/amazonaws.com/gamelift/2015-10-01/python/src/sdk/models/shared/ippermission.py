import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipprotocol_enum as shared_ipprotocol_enum


@dataclass_json
@dataclasses.dataclass
class IPPermission:
    r"""IPPermission
    <p>A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetPortSettings</a> </p>
    """
    
    from_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    ip_range: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRange') }})
    protocol: shared_ipprotocol_enum.IPProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    to_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    
