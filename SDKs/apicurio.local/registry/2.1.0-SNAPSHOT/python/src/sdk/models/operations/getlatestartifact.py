import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetLatestArtifactPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLatestArtifactRequest:
    path_params: GetLatestArtifactPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLatestArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    file_content: Optional[bytes] = dataclasses.field(default=None)
    
