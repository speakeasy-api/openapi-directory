import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewalldomainlistmetadata as shared_firewalldomainlistmetadata


@dataclass_json
@dataclasses.dataclass
class ListFirewallDomainListsResponse:
    firewall_domain_lists: Optional[list[shared_firewalldomainlistmetadata.FirewallDomainListMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallDomainLists') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
