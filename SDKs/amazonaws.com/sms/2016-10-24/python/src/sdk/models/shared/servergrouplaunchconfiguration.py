import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serverlaunchconfiguration as shared_serverlaunchconfiguration


@dataclass_json
@dataclasses.dataclass
class ServerGroupLaunchConfiguration:
    r"""ServerGroupLaunchConfiguration
    Launch configuration for a server group.
    """
    
    launch_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchOrder') }})
    server_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_launch_configurations: Optional[list[shared_serverlaunchconfiguration.ServerLaunchConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverLaunchConfigurations') }})
    
