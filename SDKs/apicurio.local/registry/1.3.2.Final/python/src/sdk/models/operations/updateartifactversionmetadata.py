import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import editablemetadata as shared_editablemetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateArtifactVersionMetaDataPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateArtifactVersionMetaDataRequest:
    path_params: UpdateArtifactVersionMetaDataPathParams = dataclasses.field()
    request: shared_editablemetadata.EditableMetaData = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateArtifactVersionMetaDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
