import dataclasses
from typing import Optional
from ..shared import usergroup as shared_usergroup


@dataclasses.dataclass
class DescribeUserGroupsResult:
    marker: Optional[str] = dataclasses.field(default=None)
    user_groups: Optional[list[shared_usergroup.UserGroup]] = dataclasses.field(default=None)
    
