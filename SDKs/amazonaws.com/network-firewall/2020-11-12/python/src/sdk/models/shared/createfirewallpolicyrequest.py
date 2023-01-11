import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallpolicy as shared_firewallpolicy
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateFirewallPolicyRequest:
    firewall_policy: shared_firewallpolicy.FirewallPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicy') }})
    firewall_policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
