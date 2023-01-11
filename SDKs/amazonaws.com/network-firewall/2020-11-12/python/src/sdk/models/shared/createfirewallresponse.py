import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewall as shared_firewall
from ..shared import firewallstatus as shared_firewallstatus


@dataclass_json
@dataclasses.dataclass
class CreateFirewallResponse:
    firewall: Optional[shared_firewall.Firewall] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Firewall') }})
    firewall_status: Optional[shared_firewallstatus.FirewallStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallStatus') }})
    
