import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pendingmaintenanceaction as shared_pendingmaintenanceaction


@dataclass_json
@dataclasses.dataclass
class ResourcePendingMaintenanceActions:
    r"""ResourcePendingMaintenanceActions
    Identifies an DMS resource and any pending actions for it.
    """
    
    pending_maintenance_action_details: Optional[list[shared_pendingmaintenanceaction.PendingMaintenanceAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingMaintenanceActionDetails') }})
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
