import dataclasses
from typing import Optional
from ..shared import subnetlist as shared_subnetlist
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class ClusterSubnetGroups:
    r"""ClusterSubnetGroups
    Describes a subnet group.
    """
    
    cluster_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    subnet_group_status: Optional[str] = dataclasses.field(default=None)
    subnets: Optional[list[shared_subnetlist.SubnetList]] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
