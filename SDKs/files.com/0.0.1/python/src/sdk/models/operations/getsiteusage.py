import dataclasses
from typing import Optional
from ..shared import usagesnapshotentity as shared_usagesnapshotentity


@dataclasses.dataclass
class GetSiteUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    usage_snapshot_entity: Optional[shared_usagesnapshotentity.UsageSnapshotEntity] = dataclasses.field(default=None)
    
