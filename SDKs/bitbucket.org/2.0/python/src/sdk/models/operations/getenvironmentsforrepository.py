import dataclasses
from typing import Optional
from ..shared import paginated_environments as shared_paginated_environments


@dataclasses.dataclass
class GetEnvironmentsForRepositoryPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnvironmentsForRepositoryRequest:
    path_params: GetEnvironmentsForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnvironmentsForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_environments: Optional[shared_paginated_environments.PaginatedEnvironments] = dataclasses.field(default=None)
    
