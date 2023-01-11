import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissionsetprovisioningstatus as shared_permissionsetprovisioningstatus


@dataclass_json
@dataclasses.dataclass
class ProvisionPermissionSetResponse:
    permission_set_provisioning_status: Optional[shared_permissionsetprovisioningstatus.PermissionSetProvisioningStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetProvisioningStatus') }})
    
