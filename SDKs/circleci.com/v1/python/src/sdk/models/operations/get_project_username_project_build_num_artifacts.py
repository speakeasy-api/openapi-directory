import dataclasses
from typing import Optional
from ..shared import artifact as shared_artifact


@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumArtifactsPathParams:
    build_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumArtifactsRequest:
    path_params: GetProjectUsernameProjectBuildNumArtifactsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectBuildNumArtifactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifacts: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None)
    
