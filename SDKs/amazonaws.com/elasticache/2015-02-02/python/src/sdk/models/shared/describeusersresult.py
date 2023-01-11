import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class DescribeUsersResult:
    marker: Optional[str] = dataclasses.field(default=None)
    users: Optional[list[shared_user.User]] = dataclasses.field(default=None)
    
