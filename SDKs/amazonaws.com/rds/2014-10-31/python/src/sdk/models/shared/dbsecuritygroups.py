import dataclasses
from typing import Optional
from ..shared import ec2securitygrouplist as shared_ec2securitygrouplist
from ..shared import iprangelist as shared_iprangelist


@dataclasses.dataclass
class DbSecurityGroups:
    r"""DbSecurityGroups
    <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
    """
    
    db_security_group_arn: Optional[str] = dataclasses.field(default=None)
    db_security_group_description: Optional[str] = dataclasses.field(default=None)
    db_security_group_name: Optional[str] = dataclasses.field(default=None)
    ec2_security_groups: Optional[list[shared_ec2securitygrouplist.Ec2SecurityGroupList]] = dataclasses.field(default=None)
    ip_ranges: Optional[list[shared_iprangelist.IPRangeList]] = dataclasses.field(default=None)
    owner_id: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
