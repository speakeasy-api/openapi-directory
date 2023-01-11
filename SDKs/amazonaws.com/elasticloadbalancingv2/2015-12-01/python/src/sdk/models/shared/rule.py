import dataclasses
from typing import Optional
from ..shared import action as shared_action
from ..shared import rulecondition as shared_rulecondition


@dataclasses.dataclass
class Rule:
    r"""Rule
    Information about a rule.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None)
    conditions: Optional[list[shared_rulecondition.RuleCondition]] = dataclasses.field(default=None)
    is_default: Optional[bool] = dataclasses.field(default=None)
    priority: Optional[str] = dataclasses.field(default=None)
    rule_arn: Optional[str] = dataclasses.field(default=None)
    
