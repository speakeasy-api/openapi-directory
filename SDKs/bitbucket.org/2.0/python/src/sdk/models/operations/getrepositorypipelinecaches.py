import dataclasses
from typing import Any,Optional
from ..shared import paginated_pipeline_caches as shared_paginated_pipeline_caches


@dataclasses.dataclass
class GetRepositoryPipelineCachesPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineCachesRequest:
    path_params: GetRepositoryPipelineCachesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineCachesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_pipeline_caches: Optional[shared_paginated_pipeline_caches.PaginatedPipelineCaches] = dataclasses.field(default=None)
    
