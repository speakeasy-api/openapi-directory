import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class UsersListBlockedByAuthenticated415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class UsersListBlockedByAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    users_list_blocked_by_authenticated_415_application_json_object: Optional[UsersListBlockedByAuthenticated415ApplicationJSON] = dataclasses.field(default=None)
    
