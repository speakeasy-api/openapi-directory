import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statefulrulegroup as shared_statefulrulegroup
from ..shared import statelessrulegroup as shared_statelessrulegroup


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallPolicyDescription:
    r"""NetworkFirewallPolicyDescription
    The definition of the Network Firewall firewall policy.
    """
    
    stateful_rule_groups: Optional[list[shared_statefulrulegroup.StatefulRuleGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatefulRuleGroups') }})
    stateless_custom_actions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessCustomActions') }})
    stateless_default_actions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessDefaultActions') }})
    stateless_fragment_default_actions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessFragmentDefaultActions') }})
    stateless_rule_groups: Optional[list[shared_statelessrulegroup.StatelessRuleGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRuleGroups') }})
    
