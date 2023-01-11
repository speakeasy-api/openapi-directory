import dataclasses
from typing import Optional
from enum import Enum
from ..shared import policyownerentitytype_enum as shared_policyownerentitytype_enum
from ..shared import policytype_enum as shared_policytype_enum


@dataclasses.dataclass
class PolicyGrantingServiceAccess:
    r"""PolicyGrantingServiceAccess
    <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
    """
    
    policy_name: str = dataclasses.field()
    policy_type: shared_policytype_enum.PolicyTypeEnum = dataclasses.field()
    entity_name: Optional[str] = dataclasses.field(default=None)
    entity_type: Optional[shared_policyownerentitytype_enum.PolicyOwnerEntityTypeEnum] = dataclasses.field(default=None)
    policy_arn: Optional[str] = dataclasses.field(default=None)
    
