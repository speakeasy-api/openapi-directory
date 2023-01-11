import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import setdimension as shared_setdimension


@dataclass_json
@dataclasses.dataclass
class SegmentDemographics:
    r"""SegmentDemographics
    Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
    """
    
    app_version: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppVersion') }})
    channel: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channel') }})
    device_type: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceType') }})
    make: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Make') }})
    model: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Model') }})
    platform: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    
