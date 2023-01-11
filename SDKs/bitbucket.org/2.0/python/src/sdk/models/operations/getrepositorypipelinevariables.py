import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_variables as shared_paginated_pipeline_variables


@dataclasses.dataclass
class GetRepositoryPipelineVariablesPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineVariablesRequest:
    path_params: GetRepositoryPipelineVariablesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineVariablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_variables: Optional[shared_paginated_pipeline_variables.PaginatedPipelineVariables] = dataclasses.field(default=None)
    
