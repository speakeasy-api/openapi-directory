import dataclasses
from typing import Optional
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class GetArtifactMetaDataPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactMetaDataRequest:
    path_params: GetArtifactMetaDataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactMetaDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
