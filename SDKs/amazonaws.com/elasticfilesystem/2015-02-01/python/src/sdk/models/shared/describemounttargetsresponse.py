import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mounttargetdescription as shared_mounttargetdescription


@dataclass_json
@dataclasses.dataclass
class DescribeMountTargetsResponse:
    r"""DescribeMountTargetsResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    mount_targets: Optional[list[shared_mounttargetdescription.MountTargetDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountTargets') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
