import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeReservedInstancesModificationsResult:
    r"""DescribeReservedInstancesModificationsResult
    Contains the output of DescribeReservedInstancesModifications.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reserved_instances_modifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
