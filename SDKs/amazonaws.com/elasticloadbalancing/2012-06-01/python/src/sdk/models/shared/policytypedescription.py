import dataclasses
from typing import Optional
from ..shared import policyattributetypedescription as shared_policyattributetypedescription


@dataclasses.dataclass
class PolicyTypeDescription:
    r"""PolicyTypeDescription
    Information about a policy type.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    policy_attribute_type_descriptions: Optional[list[shared_policyattributetypedescription.PolicyAttributeTypeDescription]] = dataclasses.field(default=None)
    policy_type_name: Optional[str] = dataclasses.field(default=None)
    
