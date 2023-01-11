import dataclasses
from typing import Optional
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class GetArtifactMetaDataByContentPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactMetaDataByContentRequest:
    path_params: GetArtifactMetaDataByContentPathParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetArtifactMetaDataByContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
