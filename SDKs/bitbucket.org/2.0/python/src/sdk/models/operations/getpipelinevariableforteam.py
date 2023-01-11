import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetPipelineVariableForTeamPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariableForTeamRequest:
    path_params: GetPipelineVariableForTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariableForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
