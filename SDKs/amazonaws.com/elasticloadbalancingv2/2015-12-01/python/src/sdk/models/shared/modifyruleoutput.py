import dataclasses
from typing import Optional
from ..shared import rule as shared_rule


@dataclasses.dataclass
class ModifyRuleOutput:
    rules: Optional[list[shared_rule.Rule]] = dataclasses.field(default=None)
    
