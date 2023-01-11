import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import installedcomponentlifecyclestate_enum as shared_installedcomponentlifecyclestate_enum


@dataclass_json
@dataclasses.dataclass
class InstalledComponent:
    r"""InstalledComponent
    Contains information about a component on a Greengrass core device.
    """
    
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    is_root: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRoot') }})
    lifecycle_state: Optional[shared_installedcomponentlifecyclestate_enum.InstalledComponentLifecycleStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    lifecycle_state_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleStateDetails') }})
    
