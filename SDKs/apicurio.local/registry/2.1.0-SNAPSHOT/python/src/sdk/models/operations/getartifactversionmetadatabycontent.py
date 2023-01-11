import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import versionmetadata as shared_versionmetadata


@dataclasses.dataclass
class GetArtifactVersionMetaDataByContentPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactVersionMetaDataByContentQueryParams:
    canonical: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'canonical', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetArtifactVersionMetaDataByContentRequest:
    path_params: GetArtifactVersionMetaDataByContentPathParams = dataclasses.field()
    query_params: GetArtifactVersionMetaDataByContentQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class GetArtifactVersionMetaDataByContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    version_meta_data: Optional[shared_versionmetadata.VersionMetaData] = dataclasses.field(default=None)
    
