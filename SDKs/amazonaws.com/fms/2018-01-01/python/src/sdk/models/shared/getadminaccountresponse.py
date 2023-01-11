import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountrolestatus_enum as shared_accountrolestatus_enum


@dataclass_json
@dataclasses.dataclass
class GetAdminAccountResponse:
    admin_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminAccount') }})
    role_status: Optional[shared_accountrolestatus_enum.AccountRoleStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleStatus') }})
    
