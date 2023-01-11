import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_variables as shared_paginated_pipeline_variables


@dataclasses.dataclass
class GetPipelineVariablesForTeamPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariablesForTeamQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPipelineVariablesForTeamRequest:
    path_params: GetPipelineVariablesForTeamPathParams = dataclasses.field()
    query_params: GetPipelineVariablesForTeamQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariablesForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_variables: Optional[shared_paginated_pipeline_variables.PaginatedPipelineVariables] = dataclasses.field(default=None)
    
