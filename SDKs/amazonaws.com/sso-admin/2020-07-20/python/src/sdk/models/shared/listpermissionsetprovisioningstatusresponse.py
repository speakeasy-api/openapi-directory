import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissionsetprovisioningstatusmetadata as shared_permissionsetprovisioningstatusmetadata


@dataclass_json
@dataclasses.dataclass
class ListPermissionSetProvisioningStatusResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    permission_sets_provisioning_status: Optional[list[shared_permissionsetprovisioningstatusmetadata.PermissionSetProvisioningStatusMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetsProvisioningStatus') }})
    
