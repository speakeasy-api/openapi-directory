import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionaliaspermission as shared_connectionaliaspermission


@dataclass_json
@dataclasses.dataclass
class DescribeConnectionAliasPermissionsResult:
    alias_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    connection_alias_permissions: Optional[list[shared_connectionaliaspermission.ConnectionAliasPermission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionAliasPermissions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
