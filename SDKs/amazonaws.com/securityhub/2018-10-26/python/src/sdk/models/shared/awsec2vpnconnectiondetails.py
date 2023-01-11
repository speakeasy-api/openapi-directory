import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2vpnconnectionoptionsdetails as shared_awsec2vpnconnectionoptionsdetails
from ..shared import awsec2vpnconnectionroutesdetails as shared_awsec2vpnconnectionroutesdetails
from ..shared import awsec2vpnconnectionvgwtelemetrydetails as shared_awsec2vpnconnectionvgwtelemetrydetails


@dataclass_json
@dataclasses.dataclass
class AwsEc2VpnConnectionDetails:
    r"""AwsEc2VpnConnectionDetails
    Details about an Amazon EC2 VPN connection.
    """
    
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    customer_gateway_configuration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerGatewayConfiguration') }})
    customer_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerGatewayId') }})
    options: Optional[shared_awsec2vpnconnectionoptionsdetails.AwsEc2VpnConnectionOptionsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    routes: Optional[list[shared_awsec2vpnconnectionroutesdetails.AwsEc2VpnConnectionRoutesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Routes') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    transit_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransitGatewayId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    vgw_telemetry: Optional[list[shared_awsec2vpnconnectionvgwtelemetrydetails.AwsEc2VpnConnectionVgwTelemetryDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VgwTelemetry') }})
    vpn_connection_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpnConnectionId') }})
    vpn_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpnGatewayId') }})
    
