import dataclasses
from typing import Optional
from ..shared import policy as shared_policy


@dataclasses.dataclass
class CreatePolicyResponse:
    r"""CreatePolicyResponse
    Contains the response to a successful <a>CreatePolicy</a> request. 
    """
    
    policy: Optional[shared_policy.Policy] = dataclasses.field(default=None)
    
