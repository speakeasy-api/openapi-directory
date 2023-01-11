import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallpolicyresponse as shared_firewallpolicyresponse


@dataclass_json
@dataclasses.dataclass
class DeleteFirewallPolicyResponse:
    firewall_policy_response: shared_firewallpolicyresponse.FirewallPolicyResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyResponse') }})
    
