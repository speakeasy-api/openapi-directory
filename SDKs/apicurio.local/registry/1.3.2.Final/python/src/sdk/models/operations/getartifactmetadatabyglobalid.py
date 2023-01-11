import dataclasses
from typing import Optional
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class GetArtifactMetaDataByGlobalIDPathParams:
    global_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactMetaDataByGlobalIDRequest:
    path_params: GetArtifactMetaDataByGlobalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactMetaDataByGlobalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
