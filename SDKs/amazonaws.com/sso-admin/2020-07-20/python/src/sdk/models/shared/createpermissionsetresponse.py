import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissionset as shared_permissionset


@dataclass_json
@dataclasses.dataclass
class CreatePermissionSetResponse:
    permission_set: Optional[shared_permissionset.PermissionSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSet') }})
    
