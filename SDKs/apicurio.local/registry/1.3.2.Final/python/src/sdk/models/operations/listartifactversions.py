import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class ListArtifactVersionsPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListArtifactVersionsRequest:
    path_params: ListArtifactVersionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListArtifactVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    list_artifact_versions_200_application_json_int64_integers: Optional[list[int]] = dataclasses.field(default=None)
    
