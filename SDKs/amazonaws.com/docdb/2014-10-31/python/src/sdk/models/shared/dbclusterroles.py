import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbClusterRoles:
    r"""DbClusterRoles
    Describes an Identity and Access Management (IAM) role that is associated with a cluster.
    """
    
    role_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
