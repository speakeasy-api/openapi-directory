import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import globalnodegrouplist as shared_globalnodegrouplist
from ..shared import globalreplicationgroupmemberlist as shared_globalreplicationgroupmemberlist


@dataclasses.dataclass
class GlobalReplicationGroupList:
    r"""GlobalReplicationGroupList
    <p>Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.</p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> represents the name of the Global datastore, which is what you use to associate a secondary cluster.</p> </li> </ul>
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    at_rest_encryption_enabled: Optional[bool] = dataclasses.field(default=None)
    auth_token_enabled: Optional[bool] = dataclasses.field(default=None)
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    cluster_enabled: Optional[bool] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    global_node_groups: Optional[list[shared_globalnodegrouplist.GlobalNodeGroupList]] = dataclasses.field(default=None)
    global_replication_group_description: Optional[str] = dataclasses.field(default=None)
    global_replication_group_id: Optional[str] = dataclasses.field(default=None)
    members: Optional[list[shared_globalreplicationgroupmemberlist.GlobalReplicationGroupMemberList]] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    transit_encryption_enabled: Optional[bool] = dataclasses.field(default=None)
    
