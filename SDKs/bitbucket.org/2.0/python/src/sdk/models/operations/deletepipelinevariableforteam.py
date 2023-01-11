import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeletePipelineVariableForTeamPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePipelineVariableForTeamRequest:
    path_params: DeletePipelineVariableForTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePipelineVariableForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
