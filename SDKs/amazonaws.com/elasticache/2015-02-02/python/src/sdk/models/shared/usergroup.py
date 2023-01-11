import dataclasses
from typing import Optional
from ..shared import usergrouppendingchanges as shared_usergrouppendingchanges


@dataclasses.dataclass
class UserGroup:
    arn: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    pending_changes: Optional[shared_usergrouppendingchanges.UserGroupPendingChanges] = dataclasses.field(default=None)
    replication_groups: Optional[list[str]] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    user_group_id: Optional[str] = dataclasses.field(default=None)
    user_ids: Optional[list[str]] = dataclasses.field(default=None)
    
