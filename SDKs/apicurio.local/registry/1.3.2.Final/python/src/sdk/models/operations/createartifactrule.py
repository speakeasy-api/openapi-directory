import dataclasses
from typing import Optional
from ..shared import rule as shared_rule
from ..shared import error as shared_error


@dataclasses.dataclass
class CreateArtifactRulePathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateArtifactRuleRequest:
    path_params: CreateArtifactRulePathParams = dataclasses.field()
    request: shared_rule.Rule = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateArtifactRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
