import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcesharepermissiondetail as shared_resourcesharepermissiondetail


@dataclass_json
@dataclasses.dataclass
class GetPermissionResponse:
    permission: Optional[shared_resourcesharepermissiondetail.ResourceSharePermissionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
