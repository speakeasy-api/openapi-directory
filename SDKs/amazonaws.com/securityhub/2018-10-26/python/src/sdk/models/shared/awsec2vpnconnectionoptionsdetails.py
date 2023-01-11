import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2vpnconnectionoptionstunneloptionsdetails as shared_awsec2vpnconnectionoptionstunneloptionsdetails


@dataclass_json
@dataclasses.dataclass
class AwsEc2VpnConnectionOptionsDetails:
    r"""AwsEc2VpnConnectionOptionsDetails
    VPN connection options.
    """
    
    static_routes_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StaticRoutesOnly') }})
    tunnel_options: Optional[list[shared_awsec2vpnconnectionoptionstunneloptionsdetails.AwsEc2VpnConnectionOptionsTunnelOptionsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TunnelOptions') }})
    
