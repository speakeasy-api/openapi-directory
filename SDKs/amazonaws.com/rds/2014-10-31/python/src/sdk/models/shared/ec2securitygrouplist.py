import dataclasses
from typing import Optional


@dataclasses.dataclass
class Ec2SecurityGroupList:
    r"""Ec2SecurityGroupList
    <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
    """
    
    ec2_security_group_id: Optional[str] = dataclasses.field(default=None)
    ec2_security_group_name: Optional[str] = dataclasses.field(default=None)
    ec2_security_group_owner_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
