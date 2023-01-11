import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ifexists_enum as shared_ifexists_enum
from ..shared import artifacttype_enum as shared_artifacttype_enum
from ..shared import artifactmetadata as shared_artifactmetadata
from ..shared import error as shared_error
from ..shared import ruleviolationerror as shared_ruleviolationerror


@dataclasses.dataclass
class CreateArtifactPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactQueryParams:
    canonical: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'canonical', 'style': 'form', 'explode': True }})
    if_exists: Optional[shared_ifexists_enum.IfExistsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ifExists', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateArtifactHeaders:
    x_registry_artifact_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactId', 'style': 'simple', 'explode': False }})
    x_registry_artifact_type: Optional[shared_artifacttype_enum.ArtifactTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-ArtifactType', 'style': 'simple', 'explode': False }})
    x_registry_description: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description', 'style': 'simple', 'explode': False }})
    x_registry_description_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name', 'style': 'simple', 'explode': False }})
    x_registry_name_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactRequest:
    headers: CreateArtifactHeaders = dataclasses.field()
    path_params: CreateArtifactPathParams = dataclasses.field()
    query_params: CreateArtifactQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': '*/*' }})
    

@dataclasses.dataclass
class CreateArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    artifact_meta_data: Optional[shared_artifactmetadata.ArtifactMetaData] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule_violation_error: Optional[shared_ruleviolationerror.RuleViolationError] = dataclasses.field(default=None)
    
