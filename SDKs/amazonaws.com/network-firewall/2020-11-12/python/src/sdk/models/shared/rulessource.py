import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulessourcelist as shared_rulessourcelist
from ..shared import statefulrule as shared_statefulrule
from ..shared import statelessrulesandcustomactions as shared_statelessrulesandcustomactions


@dataclass_json
@dataclasses.dataclass
class RulesSource:
    r"""RulesSource
    The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. 
    """
    
    rules_source_list: Optional[shared_rulessourcelist.RulesSourceList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesSourceList') }})
    rules_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RulesString') }})
    stateful_rules: Optional[list[shared_statefulrule.StatefulRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatefulRules') }})
    stateless_rules_and_custom_actions: Optional[shared_statelessrulesandcustomactions.StatelessRulesAndCustomActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRulesAndCustomActions') }})
    
