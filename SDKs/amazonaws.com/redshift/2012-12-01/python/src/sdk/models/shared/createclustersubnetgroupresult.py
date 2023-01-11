import dataclasses
from typing import Optional
from ..shared import clustersubnetgroup as shared_clustersubnetgroup


@dataclasses.dataclass
class CreateClusterSubnetGroupResult:
    cluster_subnet_group: Optional[shared_clustersubnetgroup.ClusterSubnetGroup] = dataclasses.field(default=None)
    
