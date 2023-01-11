import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error

class CreateArtifactIfExistsEnum(str, Enum):
    FAIL = "FAIL"
    UPDATE = "UPDATE"
    RETURN = "RETURN"
    RETURN_OR_UPDATE = "RETURN_OR_UPDATE"


@dataclasses.dataclass
class CreateArtifactQueryParams:
    if_exists: Optional[CreateArtifactIfExistsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifExists', 'style': 'form', 'explode': True }})
    
class CreateArtifactXRegistryArtifactTypeEnum(str, Enum):
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
class CreateArtifactHeaders:
    x_registry_artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactId', 'style': 'simple', 'explode': False }})
    x_registry_artifact_type: Optional[CreateArtifactXRegistryArtifactTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactRequest:
    headers: CreateArtifactHeaders = dataclasses.field()
    query_params: CreateArtifactQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class CreateArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
