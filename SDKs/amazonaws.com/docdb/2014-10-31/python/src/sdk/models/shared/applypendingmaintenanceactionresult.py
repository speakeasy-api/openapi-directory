import dataclasses
from typing import Optional
from ..shared import resourcependingmaintenanceactions as shared_resourcependingmaintenanceactions


@dataclasses.dataclass
class ApplyPendingMaintenanceActionResult:
    resource_pending_maintenance_actions: Optional[shared_resourcependingmaintenanceactions.ResourcePendingMaintenanceActions] = dataclasses.field(default=None)
    
