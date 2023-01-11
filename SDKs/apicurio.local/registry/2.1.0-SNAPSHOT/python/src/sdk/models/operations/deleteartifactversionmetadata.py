import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteArtifactVersionMetaDataPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteArtifactVersionMetaDataRequest:
    path_params: DeleteArtifactVersionMetaDataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteArtifactVersionMetaDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
