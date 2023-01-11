import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principalresourcepermissions as shared_principalresourcepermissions


@dataclass_json
@dataclasses.dataclass
class GetEffectivePermissionsForPathResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    permissions: Optional[list[shared_principalresourcepermissions.PrincipalResourcePermissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    
