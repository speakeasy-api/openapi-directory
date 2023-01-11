import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteDeploymentVariablePathParams:
    environment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    variable_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeploymentVariableRequest:
    path_params: DeleteDeploymentVariablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDeploymentVariableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
