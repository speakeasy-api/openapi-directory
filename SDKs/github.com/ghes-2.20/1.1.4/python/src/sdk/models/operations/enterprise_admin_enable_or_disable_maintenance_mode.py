import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import maintenance_status as shared_maintenance_status


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody:
    maintenance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance') }})
    

@dataclasses.dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeRequest:
    request: Optional[EnterpriseAdminEnableOrDisableMaintenanceModeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminEnableOrDisableMaintenanceModeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    maintenance_status: Optional[shared_maintenance_status.MaintenanceStatus] = dataclasses.field(default=None)
    
