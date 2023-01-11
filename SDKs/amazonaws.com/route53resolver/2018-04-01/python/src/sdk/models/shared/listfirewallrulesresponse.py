import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallrule as shared_firewallrule


@dataclass_json
@dataclasses.dataclass
class ListFirewallRulesResponse:
    firewall_rules: Optional[list[shared_firewallrule.FirewallRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRules') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
