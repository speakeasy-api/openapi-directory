import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import nodegroupconfiguration as shared_nodegroupconfiguration


@dataclasses.dataclass
class NodeSnapshotList:
    r"""NodeSnapshotList
    Represents an individual cache node in a snapshot of a cluster.
    """
    
    cache_cluster_id: Optional[str] = dataclasses.field(default=None)
    cache_node_create_time: Optional[datetime] = dataclasses.field(default=None)
    cache_node_id: Optional[str] = dataclasses.field(default=None)
    cache_size: Optional[str] = dataclasses.field(default=None)
    node_group_configuration: Optional[shared_nodegroupconfiguration.NodeGroupConfiguration] = dataclasses.field(default=None)
    node_group_id: Optional[str] = dataclasses.field(default=None)
    snapshot_create_time: Optional[datetime] = dataclasses.field(default=None)
    
