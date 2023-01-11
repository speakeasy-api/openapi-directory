import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeletePipelineVariableForWorkspacePathParams:
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePipelineVariableForWorkspaceRequest:
    path_params: DeletePipelineVariableForWorkspacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePipelineVariableForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
