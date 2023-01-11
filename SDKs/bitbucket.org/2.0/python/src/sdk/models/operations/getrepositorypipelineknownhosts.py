import dataclasses
from typing import Optional
from ..shared import paginated_pipeline_known_hosts as shared_paginated_pipeline_known_hosts


@dataclasses.dataclass
class GetRepositoryPipelineKnownHostsPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineKnownHostsRequest:
    path_params: GetRepositoryPipelineKnownHostsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineKnownHostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_pipeline_known_hosts: Optional[shared_paginated_pipeline_known_hosts.PaginatedPipelineKnownHosts] = dataclasses.field(default=None)
    
