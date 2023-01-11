import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetRepositoryPipelineSSHKeyPairPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryPipelineSSHKeyPairRequest:
    path_params: GetRepositoryPipelineSSHKeyPairPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRepositoryPipelineSSHKeyPairResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    pipeline_ssh_key_pair: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
