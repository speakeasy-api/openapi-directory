import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CancelReservedInstancesListingResult:
    r"""CancelReservedInstancesListingResult
    Contains the output of CancelReservedInstancesListing.
    """
    
    reserved_instances_listings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
