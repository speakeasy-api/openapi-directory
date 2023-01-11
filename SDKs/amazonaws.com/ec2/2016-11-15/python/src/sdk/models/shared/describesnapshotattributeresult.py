import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSnapshotAttributeResult:
    create_volume_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    product_codes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
