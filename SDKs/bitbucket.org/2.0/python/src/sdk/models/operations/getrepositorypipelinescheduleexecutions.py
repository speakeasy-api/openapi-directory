import dataclasses
from typing import Any,Optional
from ..shared import paginated_pipeline_schedule_executions as shared_paginated_pipeline_schedule_executions


@dataclasses.dataclass
class GetRepositoryPipelineScheduleExecutionsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    schedule_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineScheduleExecutionsRequest:
    path_params: GetRepositoryPipelineScheduleExecutionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineScheduleExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pipeline_schedule_executions: Optional[shared_paginated_pipeline_schedule_executions.PaginatedPipelineScheduleExecutions] = dataclasses.field(default=None)
    
