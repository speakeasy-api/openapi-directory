import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rolemapping as shared_rolemapping


@dataclass_json
@dataclasses.dataclass
class GetIdentityPoolRolesResponse:
    r"""GetIdentityPoolRolesResponse
    Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
    """
    
    identity_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    role_mappings: Optional[dict[str, shared_rolemapping.RoleMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleMappings') }})
    roles: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    
