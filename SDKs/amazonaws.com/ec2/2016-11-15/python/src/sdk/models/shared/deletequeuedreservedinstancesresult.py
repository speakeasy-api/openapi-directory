import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteQueuedReservedInstancesResult:
    failed_queued_purchase_deletions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    successful_queued_purchase_deletions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
