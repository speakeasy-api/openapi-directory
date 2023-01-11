import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class DbClusterSnapshotList:
    r"""DbClusterSnapshotList
    Detailed information about a cluster snapshot. 
    """
    
    availability_zones: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    db_cluster_identifier: Optional[str] = dataclasses.field(default=None)
    db_cluster_snapshot_arn: Optional[str] = dataclasses.field(default=None)
    db_cluster_snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    percent_progress: Optional[int] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    snapshot_create_time: Optional[datetime] = dataclasses.field(default=None)
    snapshot_type: Optional[str] = dataclasses.field(default=None)
    source_db_cluster_snapshot_arn: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    storage_encrypted: Optional[bool] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
