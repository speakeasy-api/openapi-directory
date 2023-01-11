import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEc2VpnConnectionRoutesDetails:
    r"""AwsEc2VpnConnectionRoutesDetails
    A static routes associated with the VPN connection.
    """
    
    destination_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCidrBlock') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
