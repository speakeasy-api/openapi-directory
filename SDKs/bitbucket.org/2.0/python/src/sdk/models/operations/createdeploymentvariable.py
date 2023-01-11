import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateDeploymentVariablePathParams:
    environment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDeploymentVariableQueryParams:
    variable_uuid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'variable_uuid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateDeploymentVariableRequest:
    path_params: CreateDeploymentVariablePathParams = dataclasses.field()
    query_params: CreateDeploymentVariableQueryParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentVariableResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_variable: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
