import dataclasses
from typing import Optional
from ..shared import paginated_pipelines as shared_paginated_pipelines


@dataclasses.dataclass
class GetPipelinesForRepositoryPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelinesForRepositoryRequest:
    path_params: GetPipelinesForRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPipelinesForRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipelines: Optional[shared_paginated_pipelines.PaginatedPipelines] = dataclasses.field(default=None)
    
