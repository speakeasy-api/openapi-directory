import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class ListUsersResponse:
    r"""ListUsersResponse
    Contains the response to a successful <a>ListUsers</a> request. 
    """
    
    users: list[shared_user.User] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
