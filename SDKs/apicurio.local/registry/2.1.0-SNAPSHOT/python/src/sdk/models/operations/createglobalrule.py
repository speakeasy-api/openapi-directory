import dataclasses
from typing import Optional
from ..shared import rule as shared_rule
from ..shared import error as shared_error


@dataclasses.dataclass
class CreateGlobalRuleRequest:
    request: shared_rule.Rule = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGlobalRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
