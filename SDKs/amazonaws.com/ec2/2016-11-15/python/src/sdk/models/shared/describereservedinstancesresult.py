import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeReservedInstancesResult:
    r"""DescribeReservedInstancesResult
    Contains the output for DescribeReservedInstances.
    """
    
    reserved_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
