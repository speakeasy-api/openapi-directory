import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class UserList:
    r"""UserList
    Users List
    """
    
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    users: list[shared_user.User] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
