import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import ruletype_enum as shared_ruletype_enum


@dataclasses.dataclass
class ListArtifactRulesPathParams:
    artifact_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListArtifactRulesRequest:
    path_params: ListArtifactRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListArtifactRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule_types: Optional[list[shared_ruletype_enum.RuleTypeEnum]] = dataclasses.field(default=None)
    
