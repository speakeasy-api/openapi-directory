import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallpolicymetadata as shared_firewallpolicymetadata


@dataclass_json
@dataclasses.dataclass
class ListFirewallPoliciesResponse:
    firewall_policies: Optional[list[shared_firewallpolicymetadata.FirewallPolicyMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicies') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
