import dataclasses
from typing import Any,Optional
from ..shared import pipeline_cache_content_uri as shared_pipeline_cache_content_uri


@dataclasses.dataclass
class GetRepositoryPipelineCacheContentURIPathParams:
    cache_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cache_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineCacheContentURIRequest:
    path_params: GetRepositoryPipelineCacheContentURIPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineCacheContentURIResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_cache_content_uri: Optional[shared_pipeline_cache_content_uri.PipelineCacheContentURI] = dataclasses.field(default=None)
    
