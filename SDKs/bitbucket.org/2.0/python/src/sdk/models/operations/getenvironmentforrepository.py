import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetEnvironmentForRepositoryPathParams:
    environment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnvironmentForRepositoryRequest:
    path_params: GetEnvironmentForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnvironmentForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_environment: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
