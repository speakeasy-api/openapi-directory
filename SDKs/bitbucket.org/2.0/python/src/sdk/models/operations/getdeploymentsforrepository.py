import dataclasses
from typing import Optional
from ..shared import paginated_deployments as shared_paginated_deployments


@dataclasses.dataclass
class GetDeploymentsForRepositoryPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeploymentsForRepositoryRequest:
    path_params: GetDeploymentsForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeploymentsForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_deployments: Optional[shared_paginated_deployments.PaginatedDeployments] = dataclasses.field(default=None)
    
