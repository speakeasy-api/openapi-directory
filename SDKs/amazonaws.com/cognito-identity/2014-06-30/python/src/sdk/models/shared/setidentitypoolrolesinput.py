import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rolemapping as shared_rolemapping


@dataclass_json
@dataclasses.dataclass
class SetIdentityPoolRolesInput:
    r"""SetIdentityPoolRolesInput
    Input to the <code>SetIdentityPoolRoles</code> action.
    """
    
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    roles: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    role_mappings: Optional[dict[str, shared_rolemapping.RoleMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleMappings') }})
    
