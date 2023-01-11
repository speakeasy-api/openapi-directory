import dataclasses
from typing import Optional
from ..shared import attachedpolicy as shared_attachedpolicy


@dataclasses.dataclass
class ListAttachedGroupPoliciesResponse:
    r"""ListAttachedGroupPoliciesResponse
    Contains the response to a successful <a>ListAttachedGroupPolicies</a> request. 
    """
    
    attached_policies: Optional[list[shared_attachedpolicy.AttachedPolicy]] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
