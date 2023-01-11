import dataclasses
from typing import Optional
from ..shared import subnetlist as shared_subnetlist


@dataclasses.dataclass
class DbSubnetGroup:
    r"""DbSubnetGroup
    Detailed information about a subnet group. 
    """
    
    db_subnet_group_arn: Optional[str] = dataclasses.field(default=None)
    db_subnet_group_description: Optional[str] = dataclasses.field(default=None)
    db_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    subnet_group_status: Optional[str] = dataclasses.field(default=None)
    subnets: Optional[list[shared_subnetlist.SubnetList]] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
