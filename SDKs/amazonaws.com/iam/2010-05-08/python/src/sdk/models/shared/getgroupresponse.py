import dataclasses
from typing import Optional
from ..shared import group as shared_group
from ..shared import user as shared_user


@dataclasses.dataclass
class GetGroupResponse:
    r"""GetGroupResponse
    Contains the response to a successful <a>GetGroup</a> request. 
    """
    
    group: shared_group.Group = dataclasses.field()
    users: list[shared_user.User] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
