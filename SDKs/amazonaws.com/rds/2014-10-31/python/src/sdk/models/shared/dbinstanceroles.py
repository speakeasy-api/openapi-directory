import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbInstanceRoles:
    r"""DbInstanceRoles
    Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
    """
    
    feature_name: Optional[str] = dataclasses.field(default=None)
    role_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
