import dataclasses
from typing import Optional


@dataclasses.dataclass
class OrganizationsDecisionDetail:
    r"""OrganizationsDecisionDetail
    Contains information about the effect that Organizations has on a policy simulation.
    """
    
    allowed_by_organizations: Optional[bool] = dataclasses.field(default=None)
    
