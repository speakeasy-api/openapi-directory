import dataclasses
from ..shared import optionstatus as shared_optionstatus


@dataclasses.dataclass
class AccessPoliciesStatus:
    r"""AccessPoliciesStatus
    The configured access rules for the domain's document and search endpoints, and the current status of those rules.
    """
    
    options: str = dataclasses.field()
    status: shared_optionstatus.OptionStatus = dataclasses.field()
    
