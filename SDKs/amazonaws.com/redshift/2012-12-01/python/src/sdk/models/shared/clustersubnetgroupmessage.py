import dataclasses
from typing import Optional
from ..shared import clustersubnetgroups as shared_clustersubnetgroups


@dataclasses.dataclass
class ClusterSubnetGroupMessage:
    r"""ClusterSubnetGroupMessage
    Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
    """
    
    cluster_subnet_groups: Optional[list[shared_clustersubnetgroups.ClusterSubnetGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
