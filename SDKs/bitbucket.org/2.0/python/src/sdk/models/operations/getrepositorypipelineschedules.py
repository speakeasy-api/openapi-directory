import dataclasses
from typing import Any,Optional
from ..shared import paginated_pipeline_schedules as shared_paginated_pipeline_schedules


@dataclasses.dataclass
class GetRepositoryPipelineSchedulesPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineSchedulesRequest:
    path_params: GetRepositoryPipelineSchedulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineSchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pipeline_schedules: Optional[shared_paginated_pipeline_schedules.PaginatedPipelineSchedules] = dataclasses.field(default=None)
    
