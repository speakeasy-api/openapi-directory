import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import rule as shared_rule
from ..shared import error as shared_error

class UpdateArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclasses.dataclass
class UpdateArtifactRuleConfigPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: UpdateArtifactRuleConfigRuleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateArtifactRuleConfigRequest:
    path_params: UpdateArtifactRuleConfigPathParams = dataclasses.field()
    request: shared_rule.Rule = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateArtifactRuleConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule: Optional[shared_rule.Rule] = dataclasses.field(default=None)
    
