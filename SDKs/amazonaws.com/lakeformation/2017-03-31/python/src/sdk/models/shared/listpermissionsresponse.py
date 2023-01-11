import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principalresourcepermissions as shared_principalresourcepermissions


@dataclass_json
@dataclasses.dataclass
class ListPermissionsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    principal_resource_permissions: Optional[list[shared_principalresourcepermissions.PrincipalResourcePermissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalResourcePermissions') }})
    
