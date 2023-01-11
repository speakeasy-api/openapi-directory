import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutFirewallRuleGroupPolicyRequest:
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    firewall_rule_group_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupPolicy') }})
    
