import dataclasses
from typing import Optional
from ..shared import policyversion as shared_policyversion


@dataclasses.dataclass
class CreatePolicyVersionResponse:
    r"""CreatePolicyVersionResponse
    Contains the response to a successful <a>CreatePolicyVersion</a> request. 
    """
    
    policy_version: Optional[shared_policyversion.PolicyVersion] = dataclasses.field(default=None)
    
