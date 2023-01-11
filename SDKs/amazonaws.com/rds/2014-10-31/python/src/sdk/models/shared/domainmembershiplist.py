import dataclasses
from typing import Optional


@dataclasses.dataclass
class DomainMembershipList:
    r"""DomainMembershipList
    An Active Directory Domain membership record associated with the DB instance or cluster.
    """
    
    domain: Optional[str] = dataclasses.field(default=None)
    fqdn: Optional[str] = dataclasses.field(default=None)
    iam_role_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
