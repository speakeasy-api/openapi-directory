import dataclasses
from typing import Optional
from ..shared import policyversion as shared_policyversion


@dataclasses.dataclass
class GetPolicyVersionResponse:
    r"""GetPolicyVersionResponse
    Contains the response to a successful <a>GetPolicyVersion</a> request. 
    """
    
    policy_version: Optional[shared_policyversion.PolicyVersion] = dataclasses.field(default=None)
    
