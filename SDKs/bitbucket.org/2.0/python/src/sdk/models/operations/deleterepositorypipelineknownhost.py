import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteRepositoryPipelineKnownHostPathParams:
    known_host_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'known_host_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepositoryPipelineKnownHostRequest:
    path_params: DeleteRepositoryPipelineKnownHostPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRepositoryPipelineKnownHostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
