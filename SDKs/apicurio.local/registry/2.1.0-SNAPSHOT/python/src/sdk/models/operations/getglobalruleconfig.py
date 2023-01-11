import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ruletype_enum as shared_ruletype_enum
from ..shared import error as shared_error
from ..shared import rule as shared_rule


@dataclasses.dataclass
class GetGlobalRuleConfigPathParams:
    rule: shared_ruletype_enum.RuleTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGlobalRuleConfigRequest:
    path_params: GetGlobalRuleConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGlobalRuleConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    rule: Optional[shared_rule.Rule] = dataclasses.field(default=None)
    
