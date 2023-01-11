import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import roletype_enum as shared_roletype_enum


@dataclass_json
@dataclasses.dataclass
class RoleMapping:
    r"""RoleMapping
    The mapping between a user/principal and their role.
    """
    
    principal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalId') }})
    role: shared_roletype_enum.RoleTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
