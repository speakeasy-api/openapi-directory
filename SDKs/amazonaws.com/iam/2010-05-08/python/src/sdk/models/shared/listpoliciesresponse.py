import dataclasses
from typing import Optional
from ..shared import policy as shared_policy


@dataclasses.dataclass
class ListPoliciesResponse:
    r"""ListPoliciesResponse
    Contains the response to a successful <a>ListPolicies</a> request. 
    """
    
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    policies: Optional[list[shared_policy.Policy]] = dataclasses.field(default=None)
    
