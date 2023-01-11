import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationsyncstate_enum as shared_configurationsyncstate_enum
from ..shared import firewallstatusvalue_enum as shared_firewallstatusvalue_enum
from ..shared import syncstate as shared_syncstate


@dataclass_json
@dataclasses.dataclass
class FirewallStatus:
    r"""FirewallStatus
    Detailed information about the current status of a <a>Firewall</a>. You can retrieve this for a firewall by calling <a>DescribeFirewall</a> and providing the firewall name and ARN.
    """
    
    configuration_sync_state_summary: shared_configurationsyncstate_enum.ConfigurationSyncStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationSyncStateSummary') }})
    status: shared_firewallstatusvalue_enum.FirewallStatusValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sync_states: Optional[dict[str, shared_syncstate.SyncState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncStates') }})
    
