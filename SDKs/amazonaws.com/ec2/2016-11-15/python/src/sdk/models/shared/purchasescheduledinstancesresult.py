import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PurchaseScheduledInstancesResult:
    r"""PurchaseScheduledInstancesResult
    Contains the output of PurchaseScheduledInstances.
    """
    
    scheduled_instance_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
