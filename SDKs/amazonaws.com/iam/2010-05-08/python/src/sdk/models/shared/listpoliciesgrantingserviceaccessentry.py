import dataclasses
from typing import Optional
from ..shared import policygrantingserviceaccess as shared_policygrantingserviceaccess


@dataclasses.dataclass
class ListPoliciesGrantingServiceAccessEntry:
    r"""ListPoliciesGrantingServiceAccessEntry
    <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
    """
    
    policies: Optional[list[shared_policygrantingserviceaccess.PolicyGrantingServiceAccess]] = dataclasses.field(default=None)
    service_namespace: Optional[str] = dataclasses.field(default=None)
    
