import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListUserPoliciesResponse:
    r"""ListUserPoliciesResponse
    Contains the response to a successful <a>ListUserPolicies</a> request. 
    """
    
    policy_names: list[str] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
