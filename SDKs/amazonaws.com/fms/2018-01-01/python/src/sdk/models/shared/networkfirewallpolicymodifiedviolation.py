import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkfirewallpolicydescription as shared_networkfirewallpolicydescription


@dataclass_json
@dataclasses.dataclass
class NetworkFirewallPolicyModifiedViolation:
    r"""NetworkFirewallPolicyModifiedViolation
    Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
    """
    
    current_policy_description: Optional[shared_networkfirewallpolicydescription.NetworkFirewallPolicyDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentPolicyDescription') }})
    expected_policy_description: Optional[shared_networkfirewallpolicydescription.NetworkFirewallPolicyDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedPolicyDescription') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
