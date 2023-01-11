import dataclasses
from typing import Optional
from ..shared import pendingmaintenanceactiondetails as shared_pendingmaintenanceactiondetails


@dataclasses.dataclass
class PendingMaintenanceActions:
    r"""PendingMaintenanceActions
    Describes the pending maintenance actions for a resource.
    """
    
    pending_maintenance_action_details: Optional[list[shared_pendingmaintenanceactiondetails.PendingMaintenanceActionDetails]] = dataclasses.field(default=None)
    resource_identifier: Optional[str] = dataclasses.field(default=None)
    
