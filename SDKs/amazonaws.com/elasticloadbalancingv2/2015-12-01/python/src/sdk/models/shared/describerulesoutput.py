import dataclasses
from typing import Optional
from ..shared import rule as shared_rule


@dataclasses.dataclass
class DescribeRulesOutput:
    next_marker: Optional[str] = dataclasses.field(default=None)
    rules: Optional[list[shared_rule.Rule]] = dataclasses.field(default=None)
    
