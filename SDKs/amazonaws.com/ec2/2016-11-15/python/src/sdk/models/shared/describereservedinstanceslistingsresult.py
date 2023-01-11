import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeReservedInstancesListingsResult:
    r"""DescribeReservedInstancesListingsResult
    Contains the output of DescribeReservedInstancesListings.
    """
    
    reserved_instances_listings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
