import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error

class DeleteArtifactRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclasses.dataclass
class DeleteArtifactRulePathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    rule: DeleteArtifactRuleRuleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteArtifactRuleRequest:
    path_params: DeleteArtifactRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteArtifactRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
