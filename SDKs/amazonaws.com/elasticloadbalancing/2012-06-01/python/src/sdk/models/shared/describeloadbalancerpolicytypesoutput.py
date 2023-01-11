import dataclasses
from typing import Optional
from ..shared import policytypedescription as shared_policytypedescription


@dataclasses.dataclass
class DescribeLoadBalancerPolicyTypesOutput:
    r"""DescribeLoadBalancerPolicyTypesOutput
    Contains the output of DescribeLoadBalancerPolicyTypes.
    """
    
    policy_type_descriptions: Optional[list[shared_policytypedescription.PolicyTypeDescription]] = dataclasses.field(default=None)
    
