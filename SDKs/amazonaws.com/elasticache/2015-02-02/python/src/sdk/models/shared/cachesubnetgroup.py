import dataclasses
from typing import Optional
from ..shared import subnetlist as shared_subnetlist


@dataclasses.dataclass
class CacheSubnetGroup:
    r"""CacheSubnetGroup
    <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    cache_subnet_group_description: Optional[str] = dataclasses.field(default=None)
    cache_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    subnets: Optional[list[shared_subnetlist.SubnetList]] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
