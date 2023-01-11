import dataclasses
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class AccessPoliciesStatus:
    r"""AccessPoliciesStatus
    A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
    """
    
    options: str = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
