import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallrulegroup as shared_firewallrulegroup


@dataclass_json
@dataclasses.dataclass
class GetFirewallRuleGroupResponse:
    firewall_rule_group: Optional[shared_firewallrulegroup.FirewallRuleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroup') }})
    
