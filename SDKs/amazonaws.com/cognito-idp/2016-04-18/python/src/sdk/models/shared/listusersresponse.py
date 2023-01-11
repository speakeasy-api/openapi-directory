import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usertype as shared_usertype


@dataclass_json
@dataclasses.dataclass
class ListUsersResponse:
    r"""ListUsersResponse
    The response from the request to list users.
    """
    
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    users: Optional[list[shared_usertype.UserType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    
