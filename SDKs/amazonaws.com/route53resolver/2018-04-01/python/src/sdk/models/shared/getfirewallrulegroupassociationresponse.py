import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallrulegroupassociation as shared_firewallrulegroupassociation


@dataclass_json
@dataclasses.dataclass
class GetFirewallRuleGroupAssociationResponse:
    firewall_rule_group_association: Optional[shared_firewallrulegroupassociation.FirewallRuleGroupAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupAssociation') }})
    
