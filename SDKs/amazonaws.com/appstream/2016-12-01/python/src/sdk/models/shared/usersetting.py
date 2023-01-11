import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action_enum as shared_action_enum
from ..shared import permission_enum as shared_permission_enum


@dataclass_json
@dataclasses.dataclass
class UserSetting:
    r"""UserSetting
    Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
    """
    
    action: shared_action_enum.ActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    permission: shared_permission_enum.PermissionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
