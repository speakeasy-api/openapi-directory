import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import rule as shared_rule

class GetArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclasses.dataclass
class GetArtifactRuleConfigPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    rule: GetArtifactRuleConfigRuleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactRuleConfigRequest:
    path_params: GetArtifactRuleConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactRuleConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule: Optional[shared_rule.Rule] = dataclasses.field(default=None)
    
