import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeReservedInstancesOfferingsResult:
    r"""DescribeReservedInstancesOfferingsResult
    Contains the output of DescribeReservedInstancesOfferings.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reserved_instances_offerings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
