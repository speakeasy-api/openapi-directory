import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PurchaseReservedInstancesOfferingResult:
    r"""PurchaseReservedInstancesOfferingResult
    Contains the output of PurchaseReservedInstancesOffering.
    """
    
    reserved_instances_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
