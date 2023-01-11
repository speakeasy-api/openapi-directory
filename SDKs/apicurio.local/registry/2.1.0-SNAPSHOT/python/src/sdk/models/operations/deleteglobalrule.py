import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ruletype_enum as shared_ruletype_enum
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteGlobalRulePathParams:
    rule: shared_ruletype_enum.RuleTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGlobalRuleRequest:
    path_params: DeleteGlobalRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGlobalRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
