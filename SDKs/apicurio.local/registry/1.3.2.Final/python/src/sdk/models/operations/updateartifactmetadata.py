import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateArtifactMetaDataPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateArtifactMetaDataRequest:
    path_params: UpdateArtifactMetaDataPathParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class UpdateArtifactMetaDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
