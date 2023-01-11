import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_variables as shared_paginated_pipeline_variables


@dataclasses.dataclass
class GetPipelineVariablesForWorkspacePathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariablesForWorkspaceRequest:
    path_params: GetPipelineVariablesForWorkspacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariablesForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_variables: Optional[shared_paginated_pipeline_variables.PaginatedPipelineVariables] = dataclasses.field(default=None)
    
