import dataclasses
from typing import Optional
from ..shared import policy as shared_policy


@dataclasses.dataclass
class GetPolicyResponse:
    r"""GetPolicyResponse
    Contains the response to a successful <a>GetPolicy</a> request. 
    """
    
    policy: Optional[shared_policy.Policy] = dataclasses.field(default=None)
    
