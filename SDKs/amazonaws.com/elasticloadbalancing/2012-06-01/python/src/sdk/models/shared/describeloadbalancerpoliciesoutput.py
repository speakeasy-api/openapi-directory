import dataclasses
from typing import Optional
from ..shared import policydescription as shared_policydescription


@dataclasses.dataclass
class DescribeLoadBalancerPoliciesOutput:
    r"""DescribeLoadBalancerPoliciesOutput
    Contains the output of DescribeLoadBalancerPolicies.
    """
    
    policy_descriptions: Optional[list[shared_policydescription.PolicyDescription]] = dataclasses.field(default=None)
    
