import dataclasses
from typing import Optional
from ..shared import ec2securitygrouplist as shared_ec2securitygrouplist


@dataclasses.dataclass
class CacheSecurityGroup:
    r"""CacheSecurityGroup
    <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    cache_security_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    ec2_security_groups: Optional[list[shared_ec2securitygrouplist.Ec2SecurityGroupList]] = dataclasses.field(default=None)
    owner_id: Optional[str] = dataclasses.field(default=None)
    
