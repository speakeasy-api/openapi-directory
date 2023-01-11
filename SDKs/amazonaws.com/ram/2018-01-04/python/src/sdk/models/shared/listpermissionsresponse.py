import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcesharepermissionsummary as shared_resourcesharepermissionsummary


@dataclass_json
@dataclasses.dataclass
class ListPermissionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    permissions: Optional[list[shared_resourcesharepermissionsummary.ResourceSharePermissionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
