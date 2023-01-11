import dataclasses
from typing import Optional


@dataclasses.dataclass
class PermissionsBoundaryDecisionDetail:
    r"""PermissionsBoundaryDecisionDetail
    Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity.
    """
    
    allowed_by_permissions_boundary: Optional[bool] = dataclasses.field(default=None)
    
