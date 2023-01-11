import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewalldomainlist as shared_firewalldomainlist


@dataclass_json
@dataclasses.dataclass
class GetFirewallDomainListResponse:
    firewall_domain_list: Optional[shared_firewalldomainlist.FirewallDomainList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainList') }})
    
