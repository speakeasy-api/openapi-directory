import dataclasses
from typing import Optional
from ..shared import ec2securitygrouplist as shared_ec2securitygrouplist
from ..shared import iprangelist as shared_iprangelist
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class ClusterSecurityGroup:
    r"""ClusterSecurityGroup
    Describes a security group.
    """
    
    cluster_security_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    ec2_security_groups: Optional[list[shared_ec2securitygrouplist.Ec2SecurityGroupList]] = dataclasses.field(default=None)
    ip_ranges: Optional[list[shared_iprangelist.IPRangeList]] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
