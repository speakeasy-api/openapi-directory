import dataclasses
from typing import Optional
from ..shared import role as shared_role


@dataclasses.dataclass
class ListRolesResponse:
    r"""ListRolesResponse
    Contains the response to a successful <a>ListRoles</a> request. 
    """
    
    roles: list[shared_role.Role] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
