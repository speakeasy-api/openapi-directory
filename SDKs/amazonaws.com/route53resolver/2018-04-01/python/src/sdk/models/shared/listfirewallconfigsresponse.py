import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallconfig as shared_firewallconfig


@dataclass_json
@dataclasses.dataclass
class ListFirewallConfigsResponse:
    firewall_configs: Optional[list[shared_firewallconfig.FirewallConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallConfigs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
