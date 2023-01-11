import dataclasses
from typing import Optional
from ..shared import pendingmaintenanceactions as shared_pendingmaintenanceactions


@dataclasses.dataclass
class PendingMaintenanceActionsMessage:
    r"""PendingMaintenanceActionsMessage
    Data returned from the <b>DescribePendingMaintenanceActions</b> action.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    pending_maintenance_actions: Optional[list[shared_pendingmaintenanceactions.PendingMaintenanceActions]] = dataclasses.field(default=None)
    
