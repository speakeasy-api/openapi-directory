import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WorkspaceRemoveUserRequest:
    r"""WorkspaceRemoveUserRequest
    A user identification object for specification with the addUser/removeUser endpoints.
    """
    
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
