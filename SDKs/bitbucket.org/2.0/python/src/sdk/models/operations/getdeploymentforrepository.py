import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeploymentForRepositoryPathParams:
    deployment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentForRepositoryRequest:
    path_params: GetDeploymentForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeploymentForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
