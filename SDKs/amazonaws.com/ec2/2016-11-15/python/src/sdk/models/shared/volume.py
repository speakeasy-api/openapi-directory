import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Volume:
    r"""Volume
    Describes a volume.
    """
    
    attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    create_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    encrypted: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fast_restored: Optional[dict[str, Any]] = dataclasses.field(default=None)
    iops: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    multi_attach_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    outpost_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    throughput: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volume_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
