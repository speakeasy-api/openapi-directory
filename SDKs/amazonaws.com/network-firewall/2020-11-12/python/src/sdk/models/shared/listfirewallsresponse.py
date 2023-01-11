import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firewallmetadata as shared_firewallmetadata


@dataclass_json
@dataclasses.dataclass
class ListFirewallsResponse:
    firewalls: Optional[list[shared_firewallmetadata.FirewallMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Firewalls') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
