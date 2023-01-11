import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import ruleviolationerror as shared_ruleviolationerror
from ..shared import versionmetadata as shared_versionmetadata


@dataclasses.dataclass
class CreateArtifactVersionPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactVersionHeaders:
    x_registry_description: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description', 'style': 'simple', 'explode': False }})
    x_registry_description_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Description-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_name: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name', 'style': 'simple', 'explode': False }})
    x_registry_name_encoded: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Name-Encoded', 'style': 'simple', 'explode': False }})
    x_registry_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Registry-Version', 'style': 'simple', 'explode': False }})
    

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
    rule_violation_error: Optional[shared_ruleviolationerror.RuleViolationError] = dataclasses.field(default=None)
    version_meta_data: Optional[shared_versionmetadata.VersionMetaData] = dataclasses.field(default=None)
    
