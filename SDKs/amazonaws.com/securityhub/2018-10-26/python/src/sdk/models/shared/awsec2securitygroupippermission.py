import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsec2securitygroupiprange as shared_awsec2securitygroupiprange
from ..shared import awsec2securitygroupipv6range as shared_awsec2securitygroupipv6range
from ..shared import awsec2securitygroupprefixlistid as shared_awsec2securitygroupprefixlistid
from ..shared import awsec2securitygroupuseridgrouppair as shared_awsec2securitygroupuseridgrouppair


@dataclass_json
@dataclasses.dataclass
class AwsEc2SecurityGroupIPPermission:
    r"""AwsEc2SecurityGroupIPPermission
    An IP permission for an EC2 security group.
    """
    
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    ip_protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpProtocol') }})
    ip_ranges: Optional[list[shared_awsec2securitygroupiprange.AwsEc2SecurityGroupIPRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRanges') }})
    ipv6_ranges: Optional[list[shared_awsec2securitygroupipv6range.AwsEc2SecurityGroupIpv6Range]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6Ranges') }})
    prefix_list_ids: Optional[list[shared_awsec2securitygroupprefixlistid.AwsEc2SecurityGroupPrefixListID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrefixListIds') }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    user_id_group_pairs: Optional[list[shared_awsec2securitygroupuseridgrouppair.AwsEc2SecurityGroupUserIDGroupPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserIdGroupPairs') }})
    
