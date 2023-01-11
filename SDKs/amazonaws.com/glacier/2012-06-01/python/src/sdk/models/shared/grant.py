import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grantee as shared_grantee
from ..shared import permission_enum as shared_permission_enum


@dataclass_json
@dataclasses.dataclass
class Grant:
    r"""Grant
    Contains information about a grant.
    """
    
    grantee: Optional[shared_grantee.Grantee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grantee') }})
    permission: Optional[shared_permission_enum.PermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
