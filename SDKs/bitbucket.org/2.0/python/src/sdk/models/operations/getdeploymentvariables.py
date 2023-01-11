import dataclasses
from typing import Optional
from ..shared import paginated_deployment_variable as shared_paginated_deployment_variable


@dataclasses.dataclass
class GetDeploymentVariablesPathParams:
    environment_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentVariablesRequest:
    path_params: GetDeploymentVariablesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeploymentVariablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_deployment_variable: Optional[shared_paginated_deployment_variable.PaginatedDeploymentVariable] = dataclasses.field(default=None)
    
