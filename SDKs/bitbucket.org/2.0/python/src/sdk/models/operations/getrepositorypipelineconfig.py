import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRepositoryPipelineConfigPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineConfigRequest:
    path_params: GetRepositoryPipelineConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pipelines_config: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
