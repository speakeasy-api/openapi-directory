import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error

class DeleteGlobalRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclasses.dataclass
class DeleteGlobalRulePathParams:
    rule: DeleteGlobalRuleRuleEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGlobalRuleRequest:
    path_params: DeleteGlobalRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGlobalRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
