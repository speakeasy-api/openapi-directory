import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import versionmetadata as shared_versionmetadata


@dataclasses.dataclass
class GetArtifactVersionMetaDataPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactVersionMetaDataRequest:
    path_params: GetArtifactVersionMetaDataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactVersionMetaDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    version_meta_data: Optional[shared_versionmetadata.VersionMetaData] = dataclasses.field(default=None)
    
