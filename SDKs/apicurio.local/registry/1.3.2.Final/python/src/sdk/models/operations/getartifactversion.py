import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetArtifactVersionPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactVersionRequest:
    path_params: GetArtifactVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
