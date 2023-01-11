import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcependingmaintenanceactions as shared_resourcependingmaintenanceactions


@dataclass_json
@dataclasses.dataclass
class DescribePendingMaintenanceActionsResponse:
    r"""DescribePendingMaintenanceActionsResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    pending_maintenance_actions: Optional[list[shared_resourcependingmaintenanceactions.ResourcePendingMaintenanceActions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingMaintenanceActions') }})
    
