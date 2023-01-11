import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Snapshot:
    r"""Snapshot
    Describes a snapshot.
    """
    
    data_encryption_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    encrypted: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    outpost_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_alias: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
