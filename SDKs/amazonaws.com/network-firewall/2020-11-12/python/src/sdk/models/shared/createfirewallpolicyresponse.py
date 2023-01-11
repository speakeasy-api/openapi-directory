import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallpolicyresponse as shared_firewallpolicyresponse


@dataclass_json
@dataclasses.dataclass
class CreateFirewallPolicyResponse:
    firewall_policy_response: shared_firewallpolicyresponse.FirewallPolicyResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyResponse') }})
    update_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateToken') }})
    
