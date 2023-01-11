import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import automaticfailoverstatus_enum as shared_automaticfailoverstatus_enum
from ..shared import nodesnapshotlist as shared_nodesnapshotlist


@dataclasses.dataclass
class SnapshotList:
    r"""SnapshotList
    Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
    """
    
    arn: Optional[str] = dataclasses.field(default=None)
    auto_minor_version_upgrade: Optional[bool] = dataclasses.field(default=None)
    automatic_failover: Optional[shared_automaticfailoverstatus_enum.AutomaticFailoverStatusEnum] = dataclasses.field(default=None)
    cache_cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    cache_cluster_id: Optional[str] = dataclasses.field(default=None)
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    cache_parameter_group_name: Optional[str] = dataclasses.field(default=None)
    cache_subnet_group_name: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    node_snapshots: Optional[list[shared_nodesnapshotlist.NodeSnapshotList]] = dataclasses.field(default=None)
    num_cache_nodes: Optional[int] = dataclasses.field(default=None)
    num_node_groups: Optional[int] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    preferred_availability_zone: Optional[str] = dataclasses.field(default=None)
    preferred_maintenance_window: Optional[str] = dataclasses.field(default=None)
    preferred_outpost_arn: Optional[str] = dataclasses.field(default=None)
    replication_group_description: Optional[str] = dataclasses.field(default=None)
    replication_group_id: Optional[str] = dataclasses.field(default=None)
    snapshot_name: Optional[str] = dataclasses.field(default=None)
    snapshot_retention_limit: Optional[int] = dataclasses.field(default=None)
    snapshot_source: Optional[str] = dataclasses.field(default=None)
    snapshot_status: Optional[str] = dataclasses.field(default=None)
    snapshot_window: Optional[str] = dataclasses.field(default=None)
    topic_arn: Optional[str] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
