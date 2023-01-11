import dataclasses
from typing import Optional
from ..shared import clustersecuritygroups as shared_clustersecuritygroups


@dataclasses.dataclass
class ClusterSecurityGroupMessage:
    r"""ClusterSecurityGroupMessage
    <p/>
    """
    
    cluster_security_groups: Optional[list[shared_clustersecuritygroups.ClusterSecurityGroups]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
