import dataclasses
from typing import Optional
from ..shared import group as shared_group


@dataclasses.dataclass
class ListGroupsForUserResponse:
    r"""ListGroupsForUserResponse
    Contains the response to a successful <a>ListGroupsForUser</a> request. 
    """
    
    groups: list[shared_group.Group] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
