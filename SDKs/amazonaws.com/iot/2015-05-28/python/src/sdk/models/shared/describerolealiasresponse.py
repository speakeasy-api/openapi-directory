import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rolealiasdescription as shared_rolealiasdescription


@dataclass_json
@dataclasses.dataclass
class DescribeRoleAliasResponse:
    role_alias_description: Optional[shared_rolealiasdescription.RoleAliasDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleAliasDescription') }})
    
