import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_steps as shared_paginated_pipeline_steps


@dataclasses.dataclass
class GetPipelineStepsForRepositoryPathParams:
    pipeline_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineStepsForRepositoryRequest:
    path_params: GetPipelineStepsForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineStepsForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_steps: Optional[shared_paginated_pipeline_steps.PaginatedPipelineSteps] = dataclasses.field(default=None)
    
