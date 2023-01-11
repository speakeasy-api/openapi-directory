import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetPipelineVariableForWorkspacePathParams:
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineVariableForWorkspaceRequest:
    path_params: GetPipelineVariableForWorkspacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelineVariableForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
