import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeletePipelineVariableForUserPathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePipelineVariableForUserRequest:
    path_params: DeletePipelineVariableForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePipelineVariableForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
