import dataclasses
from typing import Optional
from ..shared import syncjobentity as shared_syncjobentity


@dataclasses.dataclass
class GetSyncJobsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSyncJobsRequest:
    query_params: GetSyncJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSyncJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_job_entities: Optional[list[shared_syncjobentity.SyncJobEntity]] = dataclasses.field(default=None)
    
