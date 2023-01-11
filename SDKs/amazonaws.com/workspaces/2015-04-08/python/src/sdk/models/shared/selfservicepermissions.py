import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reconnectenum_enum as shared_reconnectenum_enum


@dataclass_json
@dataclasses.dataclass
class SelfservicePermissions:
    r"""SelfservicePermissions
    Describes the self-service permissions for a directory. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html\">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
    """
    
    change_compute_type: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeComputeType') }})
    increase_volume_size: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncreaseVolumeSize') }})
    rebuild_workspace: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebuildWorkspace') }})
    restart_workspace: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestartWorkspace') }})
    switch_running_mode: Optional[shared_reconnectenum_enum.ReconnectEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SwitchRunningMode') }})
    
