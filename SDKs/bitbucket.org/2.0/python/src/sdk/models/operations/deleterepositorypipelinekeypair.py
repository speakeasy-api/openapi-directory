import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteRepositoryPipelineKeyPairPathParams:
    repo_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRepositoryPipelineKeyPairRequest:
    path_params: DeleteRepositoryPipelineKeyPairPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRepositoryPipelineKeyPairResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
