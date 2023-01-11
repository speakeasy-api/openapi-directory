import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import versionmetadata as shared_versionmetadata


@dataclasses.dataclass
class CreateArtifactVersionPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    
class CreateArtifactVersionXRegistryArtifactTypeEnum(str, Enum):
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
class CreateArtifactVersionHeaders:
    x_registry_artifact_type: Optional[CreateArtifactVersionXRegistryArtifactTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactVersionRequest:
    headers: CreateArtifactVersionHeaders = dataclasses.field()
    path_params: CreateArtifactVersionPathParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class CreateArtifactVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    version_meta_data: Optional[shared_versionmetadata.VersionMetaData] = dataclasses.field(default=None)
    
