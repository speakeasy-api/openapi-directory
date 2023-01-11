import dataclasses
from typing import Optional
from ..shared import clustersecuritygroup as shared_clustersecuritygroup


@dataclasses.dataclass
class AuthorizeClusterSecurityGroupIngressResult:
    cluster_security_group: Optional[shared_clustersecuritygroup.ClusterSecurityGroup] = dataclasses.field(default=None)
    
