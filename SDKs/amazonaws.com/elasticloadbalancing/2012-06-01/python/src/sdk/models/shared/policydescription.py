import dataclasses
from typing import Optional
from ..shared import policyattributedescription as shared_policyattributedescription


@dataclasses.dataclass
class PolicyDescription:
    r"""PolicyDescription
    Information about a policy.
    """
    
    policy_attribute_descriptions: Optional[list[shared_policyattributedescription.PolicyAttributeDescription]] = dataclasses.field(default=None)
    policy_name: Optional[str] = dataclasses.field(default=None)
    policy_type_name: Optional[str] = dataclasses.field(default=None)
    
