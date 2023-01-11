import dataclasses
from typing import Optional
from ..shared import policyversion as shared_policyversion


@dataclasses.dataclass
class ListPolicyVersionsResponse:
    r"""ListPolicyVersionsResponse
    Contains the response to a successful <a>ListPolicyVersions</a> request. 
    """
    
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    versions: Optional[list[shared_policyversion.PolicyVersion]] = dataclasses.field(default=None)
    
