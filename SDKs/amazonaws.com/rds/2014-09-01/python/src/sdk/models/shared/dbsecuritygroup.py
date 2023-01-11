import dataclasses
from typing import Optional
from ..shared import ec2securitygrouplist as shared_ec2securitygrouplist
from ..shared import iprangelist as shared_iprangelist


@dataclasses.dataclass
class DbSecurityGroup:
    db_security_group_description: Optional[str] = dataclasses.field(default=None)
    db_security_group_name: Optional[str] = dataclasses.field(default=None)
    ec2_security_groups: Optional[list[shared_ec2securitygrouplist.Ec2SecurityGroupList]] = dataclasses.field(default=None)
    ip_ranges: Optional[list[shared_iprangelist.IPRangeList]] = dataclasses.field(default=None)
    owner_id: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
