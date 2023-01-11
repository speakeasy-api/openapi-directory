import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cidrblockassociation as shared_cidrblockassociation
from ..shared import ipv6cidrblockassociation as shared_ipv6cidrblockassociation


@dataclass_json
@dataclasses.dataclass
class AwsEc2VpcDetails:
    r"""AwsEc2VpcDetails
    Details about an EC2 VPC.
    """
    
    cidr_block_association_set: Optional[list[shared_cidrblockassociation.CidrBlockAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrBlockAssociationSet') }})
    dhcp_options_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DhcpOptionsId') }})
    ipv6_cidr_block_association_set: Optional[list[shared_ipv6cidrblockassociation.Ipv6CidrBlockAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6CidrBlockAssociationSet') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
