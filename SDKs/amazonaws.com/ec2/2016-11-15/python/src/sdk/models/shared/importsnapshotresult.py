import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ImportSnapshotResultSnapshotTaskDetailUserBucket:
    r"""ImportSnapshotResultSnapshotTaskDetailUserBucket
    The Amazon S3 bucket for the disk image.
    """
    
    s3_bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    s3_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportSnapshotResultSnapshotTaskDetail:
    r"""ImportSnapshotResultSnapshotTaskDetail
    Information about the import snapshot task.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    disk_image_size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    encrypted: Optional[dict[str, Any]] = dataclasses.field(default=None)
    format: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    url: Optional[dict[str, Any]] = dataclasses.field(default=None)
    user_bucket: Optional[ImportSnapshotResultSnapshotTaskDetailUserBucket] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportSnapshotResult:
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    import_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_task_detail: Optional[ImportSnapshotResultSnapshotTaskDetail] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
