import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcependingmaintenanceactions as shared_resourcependingmaintenanceactions


@dataclass_json
@dataclasses.dataclass
class ApplyPendingMaintenanceActionResponse:
    r"""ApplyPendingMaintenanceActionResponse
    <p/>
    """
    
    resource_pending_maintenance_actions: Optional[shared_resourcependingmaintenanceactions.ResourcePendingMaintenanceActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePendingMaintenanceActions') }})
    
