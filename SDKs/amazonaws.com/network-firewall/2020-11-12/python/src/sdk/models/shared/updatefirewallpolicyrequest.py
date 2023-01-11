import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallpolicy as shared_firewallpolicy


@dataclass_json
@dataclasses.dataclass
class UpdateFirewallPolicyRequest:
    firewall_policy: shared_firewallpolicy.FirewallPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicy') }})
    update_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    firewall_policy_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    firewall_policy_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    
