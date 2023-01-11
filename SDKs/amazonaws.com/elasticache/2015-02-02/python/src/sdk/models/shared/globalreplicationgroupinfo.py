import dataclasses
from typing import Optional


@dataclasses.dataclass
class GlobalReplicationGroupInfo:
    r"""GlobalReplicationGroupInfo
    The name of the Global datastore and role of this replication group in the Global datastore.
    """
    
    global_replication_group_id: Optional[str] = dataclasses.field(default=None)
    global_replication_group_member_role: Optional[str] = dataclasses.field(default=None)
    
