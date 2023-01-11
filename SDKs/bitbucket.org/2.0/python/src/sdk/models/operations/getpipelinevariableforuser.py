import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetPipelineVariableForUserPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariableForUserRequest:
    path_params: GetPipelineVariableForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariableForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
