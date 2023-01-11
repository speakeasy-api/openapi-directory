import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListRolePoliciesResponse:
    r"""ListRolePoliciesResponse
    Contains the response to a successful <a>ListRolePolicies</a> request. 
    """
    
    policy_names: list[str] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
