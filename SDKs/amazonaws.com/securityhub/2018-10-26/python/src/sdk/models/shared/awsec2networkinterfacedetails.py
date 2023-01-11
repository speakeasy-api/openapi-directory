import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2networkinterfaceattachment as shared_awsec2networkinterfaceattachment
from ..shared import awsec2networkinterfaceipv6addressdetail as shared_awsec2networkinterfaceipv6addressdetail
from ..shared import awsec2networkinterfaceprivateipaddressdetail as shared_awsec2networkinterfaceprivateipaddressdetail
from ..shared import awsec2networkinterfacesecuritygroup as shared_awsec2networkinterfacesecuritygroup


@dataclass_json
@dataclasses.dataclass
class AwsEc2NetworkInterfaceDetails:
    r"""AwsEc2NetworkInterfaceDetails
    Details about the network interface
    """
    
    attachment: Optional[shared_awsec2networkinterfaceattachment.AwsEc2NetworkInterfaceAttachment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachment') }})
    ip_v6_addresses: Optional[list[shared_awsec2networkinterfaceipv6addressdetail.AwsEc2NetworkInterfaceIPV6AddressDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpV6Addresses') }})
    network_interface_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkInterfaceId') }})
    private_ip_addresses: Optional[list[shared_awsec2networkinterfaceprivateipaddressdetail.AwsEc2NetworkInterfacePrivateIPAddressDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIpAddresses') }})
    public_dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicDnsName') }})
    public_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicIp') }})
    security_groups: Optional[list[shared_awsec2networkinterfacesecuritygroup.AwsEc2NetworkInterfaceSecurityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    source_dest_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDestCheck') }})
    
