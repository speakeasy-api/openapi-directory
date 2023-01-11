import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wafaction as shared_wafaction
from ..shared import wafexcludedrule as shared_wafexcludedrule
from ..shared import wafoverrideaction as shared_wafoverrideaction


@dataclass_json
@dataclasses.dataclass
class AwsWafWebACLRule:
    r"""AwsWafWebACLRule
    Details for a rule in an WAF WebACL.
    """
    
    action: Optional[shared_wafaction.WafAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    excluded_rules: Optional[list[shared_wafexcludedrule.WafExcludedRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedRules') }})
    override_action: Optional[shared_wafoverrideaction.WafOverrideAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverrideAction') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
