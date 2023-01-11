import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permission_enum as shared_permission_enum
from ..shared import datalakeprincipal as shared_datalakeprincipal


@dataclass_json
@dataclasses.dataclass
class PrincipalPermissions:
    r"""PrincipalPermissions
    Permissions granted to a principal.
    """
    
    permissions: Optional[list[shared_permission_enum.PermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    principal: Optional[shared_datalakeprincipal.DataLakePrincipal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    
