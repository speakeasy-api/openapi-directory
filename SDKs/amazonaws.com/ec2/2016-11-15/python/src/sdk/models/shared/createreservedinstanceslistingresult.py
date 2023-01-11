import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateReservedInstancesListingResult:
    r"""CreateReservedInstancesListingResult
    Contains the output of CreateReservedInstancesListing.
    """
    
    reserved_instances_listings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
