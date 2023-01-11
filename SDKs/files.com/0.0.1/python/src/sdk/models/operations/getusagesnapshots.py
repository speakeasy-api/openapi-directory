import dataclasses
from typing import Optional
from ..shared import usagesnapshotentity as shared_usagesnapshotentity


@dataclasses.dataclass
class GetUsageSnapshotsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsageSnapshotsRequest:
    query_params: GetUsageSnapshotsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsageSnapshotsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    usage_snapshot_entities: Optional[list[shared_usagesnapshotentity.UsageSnapshotEntity]] = dataclasses.field(default=None)
    
