import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallrulegroupmetadata as shared_firewallrulegroupmetadata


@dataclass_json
@dataclasses.dataclass
class ListFirewallRuleGroupsResponse:
    firewall_rule_groups: Optional[list[shared_firewallrulegroupmetadata.FirewallRuleGroupMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
