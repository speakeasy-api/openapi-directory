import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import accountswithrestoreaccesslist as shared_accountswithrestoreaccesslist
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class SnapshotList:
    r"""SnapshotList
    Describes a snapshot.
    """
    
    accounts_with_restore_access: Optional[list[shared_accountswithrestoreaccesslist.AccountsWithRestoreAccessList]] = dataclasses.field(default=None)
    actual_incremental_backup_size_in_mega_bytes: Optional[float] = dataclasses.field(default=None)
    availability_zone: Optional[str] = dataclasses.field(default=None)
    backup_progress_in_mega_bytes: Optional[float] = dataclasses.field(default=None)
    cluster_create_time: Optional[datetime] = dataclasses.field(default=None)
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    cluster_version: Optional[str] = dataclasses.field(default=None)
    current_backup_rate_in_mega_bytes_per_second: Optional[float] = dataclasses.field(default=None)
    db_name: Optional[str] = dataclasses.field(default=None)
    elapsed_time_in_seconds: Optional[int] = dataclasses.field(default=None)
    encrypted: Optional[bool] = dataclasses.field(default=None)
    encrypted_with_hsm: Optional[bool] = dataclasses.field(default=None)
    engine_full_version: Optional[str] = dataclasses.field(default=None)
    enhanced_vpc_routing: Optional[bool] = dataclasses.field(default=None)
    estimated_seconds_to_completion: Optional[int] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    maintenance_track_name: Optional[str] = dataclasses.field(default=None)
    manual_snapshot_remaining_days: Optional[int] = dataclasses.field(default=None)
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None)
    master_username: Optional[str] = dataclasses.field(default=None)
    node_type: Optional[str] = dataclasses.field(default=None)
    number_of_nodes: Optional[int] = dataclasses.field(default=None)
    owner_account: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    restorable_node_types: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    snapshot_create_time: Optional[datetime] = dataclasses.field(default=None)
    snapshot_identifier: Optional[str] = dataclasses.field(default=None)
    snapshot_retention_start_time: Optional[datetime] = dataclasses.field(default=None)
    snapshot_type: Optional[str] = dataclasses.field(default=None)
    source_region: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    total_backup_size_in_mega_bytes: Optional[float] = dataclasses.field(default=None)
    vpc_id: Optional[str] = dataclasses.field(default=None)
    
