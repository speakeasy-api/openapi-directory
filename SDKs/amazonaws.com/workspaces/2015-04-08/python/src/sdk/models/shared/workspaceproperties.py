import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compute_enum as shared_compute_enum
from ..shared import runningmode_enum as shared_runningmode_enum


@dataclass_json
@dataclasses.dataclass
class WorkspaceProperties:
    r"""WorkspaceProperties
    Describes a WorkSpace.
    """
    
    compute_type_name: Optional[shared_compute_enum.ComputeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeTypeName') }})
    root_volume_size_gib: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeSizeGib') }})
    running_mode: Optional[shared_runningmode_enum.RunningModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningMode') }})
    running_mode_auto_stop_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunningModeAutoStopTimeoutInMinutes') }})
    user_volume_size_gib: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserVolumeSizeGib') }})
    
