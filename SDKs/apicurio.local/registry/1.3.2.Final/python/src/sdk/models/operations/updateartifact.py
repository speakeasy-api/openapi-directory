import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateArtifactPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
class UpdateArtifactXRegistryArtifactTypeEnum(str, Enum):
    AVRO = "AVRO"
    PROTOBUF = "PROTOBUF"
    PROTOBUF_FD = "PROTOBUF_FD"
    JSON = "JSON"
    OPENAPI = "OPENAPI"
    ASYNCAPI = "ASYNCAPI"
    GRAPHQL = "GRAPHQL"
    KCONNECT = "KCONNECT"
    WSDL = "WSDL"
    XSD = "XSD"
    XML = "XML"


@dataclasses.dataclass
class UpdateArtifactHeaders:
    x_registry_artifact_type: Optional[UpdateArtifactXRegistryArtifactTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

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
    
