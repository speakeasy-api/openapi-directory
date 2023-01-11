import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeTerminationPolicyTypesAnswer:
    termination_policy_types: Optional[list[str]] = dataclasses.field(default=None)
    
