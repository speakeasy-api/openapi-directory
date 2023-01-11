import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Parameters:
    r"""Parameters
    Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.
    """
    
    exclude_boot_volume: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeBootVolume') }})
    no_reboot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoReboot') }})
    
