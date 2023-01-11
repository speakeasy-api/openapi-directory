import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WafExcludedRule:
    r"""WafExcludedRule
    Details about a rule to exclude from a rule group.
    """
    
    rule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleId') }})
    
