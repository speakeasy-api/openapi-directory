import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statefulrulegroupreference as shared_statefulrulegroupreference
from ..shared import customaction as shared_customaction
from ..shared import statelessrulegroupreference as shared_statelessrulegroupreference


@dataclass_json
@dataclasses.dataclass
class FirewallPolicy:
    r"""FirewallPolicy
    <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
    """
    
    stateless_default_actions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessDefaultActions') }})
    stateless_fragment_default_actions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessFragmentDefaultActions') }})
    stateful_rule_group_references: Optional[list[shared_statefulrulegroupreference.StatefulRuleGroupReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatefulRuleGroupReferences') }})
    stateless_custom_actions: Optional[list[shared_customaction.CustomAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessCustomActions') }})
    stateless_rule_group_references: Optional[list[shared_statelessrulegroupreference.StatelessRuleGroupReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRuleGroupReferences') }})
    
