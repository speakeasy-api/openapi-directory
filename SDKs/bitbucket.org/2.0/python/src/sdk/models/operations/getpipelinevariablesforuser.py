import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_variables as shared_paginated_pipeline_variables


@dataclasses.dataclass
class GetPipelineVariablesForUserPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariablesForUserRequest:
    path_params: GetPipelineVariablesForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariablesForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_variables: Optional[shared_paginated_pipeline_variables.PaginatedPipelineVariables] = dataclasses.field(default=None)
    
