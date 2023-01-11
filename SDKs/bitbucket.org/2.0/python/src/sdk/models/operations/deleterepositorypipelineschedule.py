import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteRepositoryPipelineSchedulePathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    schedule_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schedule_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepositoryPipelineScheduleRequest:
    path_params: DeleteRepositoryPipelineSchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRepositoryPipelineScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
