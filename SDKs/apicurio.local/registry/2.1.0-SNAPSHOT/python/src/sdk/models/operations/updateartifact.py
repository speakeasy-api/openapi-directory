import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateArtifactPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateArtifactHeaders:
    x_registry_description: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description', 'style': 'simple', 'explode': False }})
    x_registry_description_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name', 'style': 'simple', 'explode': False }})
    x_registry_name_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateArtifactRequest:
    headers: UpdateArtifactHeaders = dataclasses.field()
    path_params: UpdateArtifactPathParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class UpdateArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
